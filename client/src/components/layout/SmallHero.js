import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        backgroundSize: 'cover',
        margin: '0 auto',
        minHeight: '300px',
        marginBottom: theme.spacing(6),
        boxShadow: ' 0 5px 5px #ccc'  
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-end',
        padding: theme.spacing(6),
        color: theme.palette.primary.main,
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
        <>
        
        <div className={classes.root} style={{backgroundImage: `linear-gradient(rgba(0,0,0, .5),rgba(0,0,0, .5)), url(${props.img})`,  backgroundPosition: `center ${props.position ?? 'center'}`,}}>
        
           
        </div>
        <Typography variant="h1" className={classes.header}>{props.title}</Typography>
        </>
    )
  }

  export default SmallHero;