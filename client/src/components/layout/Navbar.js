import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import logo from '../../resources/images/logos/logo_blk.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      
    },
    nav: {
        // backgroundColor: theme.palette.common.white,
        // color: theme.palette.primary.main
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
      '&:focus': {
        backgroundColor: theme.palette.primary.light,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.primary.main,
        },
      },
    },
  }))(MenuItem);

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
       
        <AppBar position="static" className={classes.nav}>
            <Toolbar>
                {/* replace with logo */}
            {/* <Link to='/'>  */}
                <Typography variant="h6" component={Link} to="/" className={classes.title}>
                   <img src={logo} alt="the hot room" />
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
                    className={classes.menu}
                  
                >
                    
                    <StyledMenuItem onClick={handleClose} component={Link} to='/about' >About Us </StyledMenuItem>
                    
                    <StyledMenuItem onClick={handleClose} component={Link} to='/pricing' >Pricing</StyledMenuItem>
                     
                    <StyledMenuItem onClick={handleClose} component={Link} to='/classes' >Class Descriptions</StyledMenuItem>

                    <StyledMenuItem onClick={handleClose} component={Link} to='/events' >Upcoming Events </StyledMenuItem>
                    
                    <StyledMenuItem onClick={handleClose} component={Link} to='/econtact-us' >Contact Us</StyledMenuItem>

                     <StyledMenuItem onClick={handleClose} component={Link} to='/register' >Member Registration</StyledMenuItem>
                     
                     {!auth && (
                         <div>
                            <StyledMenuItem onClick={handleClose} component={Link} to='/login' >Log in</StyledMenuItem>
                         </div>
                     )}
                    


                    {auth && (
                        <div>
                          <StyledMenuItem onClick={handleClose} component={Link} to='/dashboard' >Member Dashboard</StyledMenuItem>
                            
                          <StyledMenuItem onClick={handleClose} component={Link} to='/signout' >Log Out</StyledMenuItem>
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
                    {/* <AccountCircle /> */}
                </IconButton>
                
                </div>
            )}
            </Toolbar>
        </AppBar>
        </div>
    );
}

