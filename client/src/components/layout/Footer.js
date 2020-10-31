import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import logo from '../../resources/images/logo.jpg'
import Contact from '../../components/common/ContactForm'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: '48px',
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        minHeight: '100px'
      }, 
      infoBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto'
      },
      logoBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        margin: 'auto'
      },
      contactBox: {
    
      },
      copyright: {
        backgroundColor: '#424242',
        color: theme.palette.primary.contrastText,
        padding: '16px'
      }
}));




const Footer = ({  }) => {
    const classes = useStyles();
 


    return (
        <footer align="bottom" position="fixed" className={classes.root}>
            <Grid container >
                <Grid xs={12} container item className={classes.container} align="center">
                    <Grid xs={12} md={4} item className={classes.infoBox} >
                        
                        <Typography align="center" variant="h4">Contact Info</Typography>
                    
                    
                        <Typography align="left" variant="body1">Phone number</Typography>
                    
                    
                        <Typography align="left" variant="body1">Email</Typography>
                    
                    
                        <Typography align="left" variant="body1">Address</Typography>
                       
                    </Grid>
                    <Grid xs={12} md={4} item className={classes.logoBox} align="center">
                        <div>
                            <img src={logo} alt="the hot room logo" className={classes.logo}></img>
                        </div>
                        <Typography variant="h2">the hot room</Typography> 
                    </Grid>
                    <Grid xs={12} md={4} item className={classes.contactBox}>
                       
                            <Typography align="left" variant="h4">Let's Chat</Typography>
                        
                        <Contact />
                    </Grid>
                </Grid>
                
                <Grid xs={12} container item className={classes.copyright} justify="center" align="center">
                    <Grid item xs={12}>
                        <Typography variant="body" >&#169; 2020 the hot room</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body" >Built by Melissa Day</Typography>
                    </Grid>
                </Grid>
            </Grid> 
           
    
       </footer>
    )
};
  

    

export default Footer;