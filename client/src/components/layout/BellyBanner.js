import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    container: {
        height: '100%'
    },
    textBox: {
        background: theme.palette.secondary.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(6)
    },
    text: {
        width: '60%',
        lineHeight: 2
    },
    imgContainer: {
        width: '100%',
        height: '400px'
    },
    foot: {
        background: theme.palette.primary.light,
        color: theme.palette.common.white,
        padding: theme.spacing(3)

    }
}));

const BellyBanner = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid container item xs={12} >
                    <Grid item xs={12} md={6} className={classes.textBox}>
                        <Typography 
                            variant="h4" 
                            color="secondary" align="center" justify="center" 
                            className={classes.text}
                            
                        >
                            you deserve to live the life of your dreams
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.imgContainer}>
                        <img src="" alt=""/>
                </Grid>
                </Grid>
                
                <Grid container item xs={12} className={classes.foot}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" >
                            hot room. cool people.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


export default BellyBanner;