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
        padding: theme.spacing(8)
    },
    sectionTitle: {

    },
    subTitle: {
        color: theme.palette.primary.main,
   
    },
    textContainer: {
        paddingLeft: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    foot: {
      paddingTop: theme.spacing(4),
      margin: 'auto',
      maxWidth: '800px'
    }
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
                    <Typography className={classes.sectionTitle} variant="h3" align="center" gutterBottom>We're all in this together.</Typography>
                    <Typography className={classes.subTitle} variant="h5" align="center" gutterBottom>To ensure we all receive the best possible experience, please review our studio etiquette.</Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Arrive at least 5 minutes early for class, and plan to stay the entire time
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Bring only a mat, towel, and water in the room
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Lock your valuables in the car, as we are not responsible for lost items
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Do only the postures as prescribed by the instructor, you may practice other variations before or after class
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Practice stillness in the room, between postures and during postures
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Yoga class is a moving meditation; try to move with the words, not before or after
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    Refrain from strong perfumes, oils, and body odors
                    </Typography>
                    <Typography className={classes.text} variant="body1" align="left" gutterBottom>
                    You may speak quietly in the room before class, refrain from speaking during and after class
                    </Typography>  
                </Grid>
                <Grid item xs={12} className={classes.foot}>
                    <Typography variant="h6"  align="center" color="primary">
                    “Let nothing steal your peace.”
                    </Typography>
                    <Typography variant="body2"  align="center" >
                    These are simply guidelines to ensure a pleasurable experience, but we understand that distractions happen. Have grace with your fellow yogis, as we never truly know what someone is working through. 
                    </Typography>
                </Grid>
                
            </Grid>
            
        </Grid>
    )
}

export default Etiquette;