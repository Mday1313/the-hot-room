import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles"
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const Navbar = ({ classes, router }) => {
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
                {/* Main Logo / Home Button */}
                <Typography variant="h5" component="h1" color="primary" className={classes.toolbarTitle}>
                    The Hot Room
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
                        <MenuItem onClick={handleClose}>About Us</MenuItem>
                        <MenuItem onClick={handleClose}>Events</MenuItem>
                        <MenuItem onClick={handleClose}>Classes Descriptions & Schedule</MenuItem>
                        <MenuItem onClick={handleClose}>Pricing</MenuItem>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                        <MenuItem onClick={handleClose}>Member Sign In</MenuItem>
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