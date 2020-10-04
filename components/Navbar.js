import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles"
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ActiveLink from "./ActiveLink";

const Navbar = ({ classes, router, pageProps: { auth } }) => {
    const { user = { } } = auth || {};

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.appBar} color="default" position={router.pathname === "/" ? "fixed" : "static"}>
            <Toolbar>
                {/* TODO: Main Logo / Home Button */}
               
                <Typography variant="h5" component="h1" color="primary" className={classes.toolbarTitle}>
                    <ActiveLink href="/">
                        The Hot Room
                    </ActiveLink>
                </Typography>
               
                <IconButton edge="start" className={classes.icon} color="primary" aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenu}>
                    <MenuIcon />
                </IconButton>
           

                <div>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        {/* TODO: add links */}
                        <MenuItem onClick={handleClose}>
                            <ActiveLink href="/about">
                                About Us
                            </ActiveLink>
                        </MenuItem>
                        {/* TODO: links that bring you down the page */}
                        <MenuItem onClick={handleClose}>Events</MenuItem>
                        <MenuItem onClick={handleClose}>Classes Descriptions & Schedule</MenuItem>
                        <MenuItem onClick={handleClose}>Pricing</MenuItem>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                     
                         {/* If logged in give addition menu options, and replace Member Sign in with Sign Out */}
                        {user.id ? (
                            // Auth
                            <div>

                                <MenuItem onClick={handleClose}>Member Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                            </div>
                            
                        ) : ( 
                            // UnAuth
                            
                            <MenuItem onClick={handleClose}>
                                <ActiveLink href="/signin">
                                    Member Sign In
                                </ActiveLink>
                            </MenuItem>
                          
                        )}
                    </Menu>
                </div>
            </Toolbar>


        </AppBar>
    )
};
  
const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    toolbarTitle: {
        flex: 1
    },
    icon: {
        marginRight: theme.spacing.unit
    },
  
})
    

export default withStyles(styles)(Navbar);