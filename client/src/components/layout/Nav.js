import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../../resources/images/logo_flame.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        position: 'absolute',
        zIndex: 100,
        // background: theme.palette.background.overlay,
       
    },
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    phone: {
        width: '300px',
        color: theme.palette.secondary.main
    },
    label: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        textAlign: 'center'
    },
    socials: {
        width: '300px',
        textAlign: 'right',
    },
    socialLink: {
        color: theme.palette.primary.contrastText,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.main
    },
    menu: {
        
    },
    menuItem: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
        fontWeight: 400,
        padding: theme.spacing(2)
    },
    title: {
        display: 'block',
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        fontWeight: 700
    },
    logo: {
        margin: 'auto 0',
        paddingBottom: theme.spacing(1)
    }
}));

// const StyledMenuItem = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//         color: theme.palette.primary.main,
//       '&:focus': {
//         backgroundColor: theme.palette.primary.light,
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//           color: theme.palette.primary.main,
//         },
//       },
//     },
//   }))(MenuItem);

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

    const handleScroll = (e) => {
        console.log('hello')
    }

    return (
        <div className={classes.root} >
       
            <div className={classes.container} >
                <Typography variant="body1" spacing={3} className={classes.phone}>
                    <CallIcon />
                    Call us: 615-457-3075
                </Typography>
                <div className={classes.label}>
                    <img className={classes.logo} src={logo} alt="the hot room" width="25px"/>
                    <Typography variant="h4" component={Link} to="/" align="center" className={classes.title}>
                 
                    the hot room
                    </Typography>
                    <div className={classes.menu}>
                        <Typography variant="h6" component={Link} to="/team" align="center"className={classes.menuItem} >Team</Typography>
                        <Typography variant="h6" component={Link} to="/classes" align="center"className={classes.menuItem} >Classes</Typography>
                        <Typography variant="h6" component={Link} to="/events" align="center"className={classes.menuItem} >Events</Typography>
                        <Typography variant="h6" component={Link} to="/pricing" align="center"className={classes.menuItem} >Prices</Typography>
                        <Button variant="contained" color="secondary">Book Now</Button>
                    </div>
                </div>
                <div className={classes.socials}>
                    <IconButton href="https://www.facebook.com/TheHotRoomTN/" >
                        <FacebookIcon fontSize="medium" className={classes.socialLink}  />
                    </IconButton>
                    
                    <IconButton href="https://www.instagram.com/thehotroomtn/">
                        <InstagramIcon fontSize="medium" className={classes.socialLink}  />
                    </IconButton>
                </div>
            </div>
           
        </div>
    );
}