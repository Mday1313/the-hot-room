const express = require("express");
const next = require("next");
const session = require("express-session");
const mongoose = require("mongoose");
const logger = require("morgan");
const mongoSessionStore = require("connect-mongo");
const expressValidator = require("express-validator");
const passport = require("passport");
const helmet = require("helmet");
const compression = require("compression");

require("dotenv").config();

require("./models/Post");
//require("./models/Event");
require("./models/User");
const routes = require("./routes");
require("./passport");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;
const app = next({ dev });
const handle = app.getRequestHandler();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose
  .connect(
    process.env.MONGO_URI,
    mongooseOptions
  )
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(helmet());
    server.use(compression());
  }

  server.use(express.json());
  server.use(expressValidator());

  /* give all Next.js's requests to Next.js server */
  server.get("/_next/*", (req, res) => {
    handle(req, res);
  });

  server.get("/static/*", (req, res) => {
    handle(req, res);
  });

  const MongoStore = mongoSessionStore(session);
  const sessionConfig = {
    name: "hot-room.sid",
    // secret used for using signed cookies w/ the session
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60 // save session for 14 days
    }),
    // forces the session to be saved back to the store
    resave: false,
    // don't save unmodified sessions
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
    }
  };

  if (!dev) {
    sessionConfig.cookie.secure = true; // serve secure cookies in production environment
    server.set("trust proxy", 1); // trust first proxy
  }

  /* Apply our session configuration to express-session */
  server.use(session(sessionConfig));

  /* Add passport middleware to set passport up */
  server.use(passport.initialize());
  server.use(passport.session());

  server.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
  });


  server.use(
    logger("dev", {
      skip: req => req.url.includes("_next")
    })
  );


  server.use("/", routes);

  server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json(message);
  });

  server.get("/profile/:userId", (req, res) => {
    const routeParams = Object.assign({}, req.params, req.query);
    return app.render(req, res, "/profile", routeParams);
  });


  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on ${ROOT_URL}`);
  });
});