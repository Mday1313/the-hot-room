import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: theme.spacing(2),
      
    },
    
    btn: {
      padding: '48px'
      
    },
    name: {
  
    },
    reviewer: {
      fontWeight: '600'
    },
    review: {
      color: theme.palette.grey['600'],
      height: '100px',
      paddingTop: theme.spacing(1)
    },
    source: {
      alignItems: 'flex-end',
    },
    text: {
        color: theme.palette.secondary.dark
    },
  }));

const ReviewCard = () => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            <Grid container item xs={12}  >
              <Grid item xs={12} className={classes.name}>
                <Typography variant="body1" color="primary" align="right" className={classes.reviewer}>Reviewer Name</Typography>
                <Typography variant="body2" color="primary" align="right" className={classes.stars}>5 Stars</Typography>
              </Grid>
              <Grid item xs={12} className={classes.review}>
                <Typography variant="body1"  align="center" >review goes here</Typography>
              </Grid>
              <Grid item xs={12} className={classes.source}>
                <Typography variant="body1" color="primary" align="right" >Source - date</Typography>
              </Grid>
            </Grid>
           
           
           
        </Grid>
      </div>
      );
    }
 
  
  

export default ReviewCard;