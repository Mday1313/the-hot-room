import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from 'react-router-dom/Link';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
       
        <AppBar position="static">
            <Toolbar>
                {/* replace with logo */}
            {/* <Link to='/'>  */}
                <Typography variant="h6" className={classes.title}>
                    The Hot Room Yoga & Wellness
                </Typography>
            {/* </Link>   */}
            <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                <MenuIcon />
            </IconButton>
            <Menu
                    id="menu-appbar"
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
                     <Link to='/about'>
                        <MenuItem onClick={handleClose}>About Us</MenuItem>
                     </Link>
                     <Link to='/pricing'>
                        <MenuItem onClick={handleClose}>Pricing</MenuItem>
                     </Link>
                     <Link to='/events'>
                        <MenuItem onClick={handleClose}>Events</MenuItem>
                     </Link>
                     <Link to='/contact-us'>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                     </Link>
                     <Link to='/register'>
                        <MenuItem onClick={handleClose}>Register</MenuItem>
                     </Link>
                     <Link to='/login'>
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                     </Link>


                    {auth && (
                        <div>
                            <Link to='/dashboard'>
                                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                            </Link>
                            
                         
                        </div>
                    )}
                </Menu>
           
            {auth && (
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                
                </div>
            )}
            </Toolbar>
        </AppBar>
        </div>
    );
}

