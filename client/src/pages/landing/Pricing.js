import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import img from '../../resources/images/yogaPortrait.jpg';

import headImg from '../../resources/images/HR-23.jpg';
import { url } from 'gravatar';
import Etiquette from '../../components/layout/Etiquette';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
    },
    section: {
        maxWidth: '1400px',
        margin: 'auto',
        overflow: 'hidden',
        marginBottom: '40px'
    }, 
    pricing: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6)
    },
    morePricing: {
        width: '100vw',
        background: theme.palette.secondary.light
    },
    morePricingTitle: {
        padding: theme.spacing(4),
      
    },
    textContainer: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-evenly'
    },
    text:{
        paddingBottom: theme.spacing(2),
    },
    private: {
        width: '80%',
        margin: 'auto'
    },
    imgContainer: {
        padding: theme.spacing(4)
    },
    btn: {
        width: '40%',
        margin: '0 auto'
    },
  
}))

const Pricing = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SmallHero  alt="yoga image" img={headImg} position="75%"/>
            <Grid container className={classes.section} >
                <Grid container item xs={12} className={classes.pricing}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.title} align="center" color="primary">
                                Prices
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.textContainer}>
                        <Typography className={classes.sectionTitle} variant="h3" align="center" gutterBottom>Ready to join?</Typography>
                        <Typography className={classes.text} variant="h6" align="center">
                        Whether you are looking for an unlimited yoga membership, or just a weekly maintenance package, we have an option for you. With packages ranging from $69 to $159 month, our membership options are designed with your lifestyle in mind. we take an individualized approach to meet your goals, and your budget. 
                        </Typography>
                        <Typography className={classes.text} variant="h6" align="center">
                        Schedule a consultation with us to make sure you get exactly what you need.
                        </Typography>
                        <Button className={classes.btn} href="https://clients.mindbodyonline.com/classic/ws?studioid=5398&stype=41&sTG=22" color="secondary" variant="contained">
                            Memberships
                        </Button>
                    </Grid>
                    <Grid className={classes.imgContainer} item xs={12} md={6} align="center">
                    <img src={img} alt="yoga protrait" height="500px"/>
                    </Grid>
                </Grid>
                <Grid container item  xs={12} className={classes.morePricing}>
                    <Grid item xs={12} >
                        <Typography variant="h2" className={classes.morePricingTitle} align="center" color="primary">
                            Trial Packages
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.textContainer}>
                      
                        <Typography className={classes.text} variant="h3" color="secondary" align="center">
                        $25 
                      </Typography>
                      <Typography className={classes.text} variant="h6" align="center">
                        Single Session
                      </Typography>
                      <Button className={classes.btn} href="https://clients.mindbodyonline.com/classic/ws?studioid=5398&stype=41&sTG=22&prodId=564" color="primary" variant="contained">
                          Sign Up Now
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.textContainer}>
                      
                      <Typography className={classes.text} variant="h3" align="center" color="secondary">
                        $89
                      </Typography>
                      <Typography className={classes.text} variant="h6" align="center">
                        4 Class Pack - 30 day exp
                      </Typography>
                      <Button className={classes.btn} href="https://clients.mindbodyonline.com/classic/ws?studioid=5398&stype=41&sTG=22&prodId=683" color="primary" variant="contained">
                          Sign Up Now
                      </Button>
                  </Grid>
                  <Grid item xs={12} md={4} className={classes.textContainer}>
                      
                    <Typography className={classes.text} variant="h3" align="center" color="secondary">
                        $179
                      </Typography>
                      <Typography className={classes.text} variant="h6" align="center">
                        One Month Unlimited - 30 days
                      </Typography>
                      <Button className={classes.btn} href="https://clients.mindbodyonline.com/classic/ws?studioid=5398&stype=41&sTG=22&prodId=92" color="primary" variant="contained">
                          Sign Up Now
                      </Button>
                  </Grid>
                  <Grid item xs={12} className={classes.textContainer}>
                      <Typography variant="h3" color="secondary" align="center">
                          Private Sessions
                      </Typography>
                      <Typography variant="h6" align="center" className={classes.private}>
                      Our private sessions provide the opportunity to receive individualized attention to get you started on your yoga journey. We begin your series at a lower temperature, and gradually increase the heat each session. private lessons are perfect for beginners and seasoned yogis. Prices start at $160 per session.
                      </Typography>
                      <Typography variant="body1" color="primary" align="center" className={classes.private}>* Mats, towels, water, and retail available to purchase or rent in studio</Typography>
                      
                      <Typography variant="body1" align="center" className={classes.private} color="primary" >* All yoga classes are subject to TN sales tax</Typography>
​​


                  </Grid>
                </Grid>
               <Etiquette />
            </Grid>
            
           
        </div>
    )
}

export default Pricing;