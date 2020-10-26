import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
      maxWidth: '1000px',
      paddingBottom: theme.spacing(6),
      
    },
    reviews: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1)
    },
    header: {
      padding: '48px',
    },
    paper: {
        // width: '200px',
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-around',
        height: '150px',
        
    },
    btn: {
      padding: '48px'
      
    },
    text: {
        color: theme.palette.secondary.dark
    },
  }));

const Reviews = () => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            <Grid container item xs={12} justify="center" >
              <Grid item xs={12} >
                <Typography variant="h5" color="primary" align="center" className={classes.header}>you have the power to reclaim your health</Typography>
              </Grid>
              
            </Grid>
           
              <Grid container item xs={12} justify="space-around"  className={classes.reviews}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} sm={4} xs={12} item >
                    <Paper className={classes.paper} >Hello</Paper>
                  </Grid>
                ))}
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  

export default Reviews;

