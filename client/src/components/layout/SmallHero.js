import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        background: theme.palette.primary.light,
        margin: '0 auto',
        maxHeight: '300px',
        marginBottom: theme.spacing(6),
        boxShadow: ' 0 5px 5px #ccc'  
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
            <Typography variant="h1" align="center" className={classes.header}>{props.title}</Typography>
           
        </div>
    )
  }

  export default SmallHero;