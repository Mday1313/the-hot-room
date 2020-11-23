import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        margin: '0 auto',
        maxHeight: '250px'
  
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(4)
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
              
                <Typography variant="h2" color="secondary" className={classes.header}>{props.title}</Typography>
           
            {/* <img src={props.img} alt={props.alt} width="100%" /> */}
        </div>
    )
  }

  export default SmallHero;