import React from 'react'
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        
    },
    textContainer: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
       
    },
    text: {
        color: theme.palette.secondary.main

    },
}));


const CallToAction = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    feel better than ever
                </Typography>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    increase flexibility
                </Typography>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    relieve pain
                </Typography>
            </div>
        </div>
     
      );
}

export default CallToAction;



