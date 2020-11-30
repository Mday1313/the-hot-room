import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        backgroundImage: 'linear-gradient(to bottom right, #ee8b81, #e9c85a, #bee0c6)',
        margin: '0 auto',
        maxHeight: '250px',
        marginBottom: theme.spacing(6),
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',  
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(6),
        color: theme.palette.common.white,
        fontWeight: '500'
    },
    img: {
        display: 'block',
        overflow: 'hidden',
    },
  }));

  function SmallHero({...props}) {
      const classes = useStyles();
     
    return (
        <div className={classes.root}>
              
                <Typography variant="h1" className={classes.header}>{props.title}</Typography>
           
        </div>
    )
  }

  export default SmallHero;