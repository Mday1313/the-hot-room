import { SheetsRegistry } from "jss";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";


/* Create your app color theme here */
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
  palette: {
    primary: {
        main: '#056571',
        light: '#bee8e5',
        contrastText: '#fff'
    },
    secondary: {
        main: '#fedcd2',
        dark: '#f26336',

    },
    default: {
        main: '#fff'
    }
    // favoriteIcon: pink[200],
    // commentIcon: blue[300],
    // type: "light"
  },
  spacing: {
      
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}