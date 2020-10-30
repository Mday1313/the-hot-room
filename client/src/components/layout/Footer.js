import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
      contactBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        width: '80',
        margin: 'auto'
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
                    <Grid xs={12} md={4} item className={classes.contactBox} >
                        <div>
                            <Typography align="center" variant="h4">Contact Info</Typography>
                        </div>
                        <div>
                            <Typography align="left" variant="body1">Phone number</Typography>
                        </div>
                        <div>
                            <Typography align="left" variant="body1">Email</Typography>
                        </div>
                        <div>
                            <Typography align="left" variant="body1">Address</Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} md={4} item>
                        logo
                    </Grid>
                    <Grid xs={12} md={4} item>
                        contact us
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