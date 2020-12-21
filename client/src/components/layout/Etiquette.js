import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import img from '../../resources/images/HR-30.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default
    },
    title: {
        padding: theme.spacing(6)
    },
    textContainer: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
}));

const Etiquette = () => {
    const classes = useStyles();

    return(
        <Grid container className={classes.root} >
            <Grid container item xs={12} >
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.title} align="center" color="primary">
                            Etiquette
                    </Typography>
                </Grid>
                <Grid className={classes.imgContainer} item xs={12} md={6} align="center">
                <img src={img} alt="yoga protrait" width="100%"/>
                </Grid>
                <Grid item xs={12} md={6} className={classes.textContainer}>
  
                    <Typography className={classes.text} variant="h6" align="center">
                    whether you are looking for an unlimited yoga membership, or just a weekly maintenance package, we have an option for you. with packages ranging from $69 to $159 month, our membership options are designed with your lifestyle in mind. we take an individualized approach to meet your goals, and your budget. 
                    </Typography>
                    <Typography className={classes.text} variant="h6" align="center">
                    schedule a consultation with us to make sure you get exactly what you need.
                    </Typography>
                   
                </Grid>
                
            </Grid>
            
        </Grid>
    )
}

export default Etiquette;