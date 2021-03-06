import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../resources/images/logo_text_gr.png'
import Contact from '../../components/common/ContactForm';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'


const useStyles = makeStyles((theme) => ({
//    root: {
//         position: 'relative',
//         bottom: '0'
//    },
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
        alignContent: 'space-around',
        flexDirection: 'column',
        width: '80%',
      },
      map: {
          width: '100%',
          paddingTop: theme.spacing(3)
      },
      logoBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'column',
      },
      logo: {
        maxWidth: '100%'
      },
      contactBox: {
        maxWidth: '400px',
        margin: 'auto'
      },
      socialLink: {
        margin: theme.spacing(3),
        color: theme.palette.secondary.light,
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
        <footer  className={classes.root}>
            <Grid container >
                <Grid xs={12} container item className={classes.container} align="center">
                    <Grid xs={12} md={4} item className={classes.infoBox} >
                        
                        <Typography align="center" variant="h4">Studio Info</Typography>
                    
                    
                        <Typography align="center" variant="body1"><b>Phone:</b> 615-457-3075</Typography>
                    
                    
                        <Typography align="center" variant="body1"><b>Email:</b> info@thehotroomtn.com</Typography>
                    
                    
                        <Typography align="center" variant="body1"><b>Address:</b> 93 seaboard lane, #1004 <br></br>brentwood, tn 37027</Typography>

                        <div className={classes.map}>
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12916.912109704223!2d-86.8171942!3d35.9658502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510982bafcc09853!2sThe%20Hot%20Room%20Yoga%20%26%20Wellness!5e0!3m2!1sen!2sus!4v1604772767621!5m2!1sen!2sus" 
                              
                                height="200" 
                                frameBorder="0"  
                                allowFullScreen={true} 
                                // aria-hidden={false} 
                                tabIndex="0">
                            </iframe>
                           
                        </div>
                       
                    </Grid>
                    <Grid xs={12} md={4} item className={classes.logoBox} align="center">
                        <div>
                            <img src={logo} alt="the hot room logo" className={classes.logo}></img>
                        </div>
                        <div >
                            <IconButton href="https://www.facebook.com/TheHotRoomTN/">
                                <FacebookIcon fontSize="large" className={classes.socialLink}  />
                            </IconButton>
                            
                            <IconButton href="https://www.instagram.com/thehotroomtn/">
                                <InstagramIcon fontSize="large" className={classes.socialLink}  />
                            </IconButton>
                            
                        </div>
                        
                    </Grid>
                    <Grid xs={12} md={4} item className={classes.contactBox}>
                       
                        <Typography align="center" variant="h4">Let's Chat</Typography>
                        
                        <Contact />
                    </Grid>
                </Grid>
                
                <Grid xs={12} container item className={classes.copyright} justify="center" align="center">
                    <Grid item xs={12}>
                        <Typography variant="body1" >&#169; 2020 the hot room</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" >Built by Melissa Day</Typography>
                    </Grid>
                </Grid>
            </Grid> 
           
    
       </footer>
    )
};
  

    

export default Footer;