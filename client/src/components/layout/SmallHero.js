import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        backgroundSize: 'cover',
        margin: '0 auto',
        minHeight: '200px',
        boxShadow: ' 0 1px 1px #4a4a4a'  
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-end',
        padding: theme.spacing(6),
        
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
        
        <div className={classes.root} style={{backgroundImage: `linear-gradient(rgba(0,0,0, .5),rgba(0,0,0, .5)), url(${props.img})`,  backgroundPosition: `center ${props.position ?? 'center'}`}}>
        
           
        </div>
        
        <Typography variant="h1" color={props.altText ? 'textSecondary' : 'primary'} style={props.title ? {display: 'flex'} : {display: 'none'}} className={classes.header}>{props.title}</Typography>
        </>
    )
  }

  export default SmallHero;