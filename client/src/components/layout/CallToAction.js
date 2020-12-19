import React from 'react'
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,

        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        
    },
    textContainer: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
       flexWrap: 'wrap'
    },
    text: {
        color: theme.palette.primary.contrastText
    },
}));


const CallToAction = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container className={classes.textContainer}>
                <Grid container item xs={12}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" align="center" className={classes.text}>
                            feel better than ever
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" align="center" className={classes.text}>
                            increase flexibility
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" align="center"  className={classes.text}>
                            relieve pain
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     
      );
}

export default CallToAction;



