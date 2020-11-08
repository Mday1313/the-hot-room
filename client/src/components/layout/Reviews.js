import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ReviewCard from '../common/ReviewCard'

const reviews = [
  {
    id: '1',
    name: 'Name',
    starCount: 5,
    review: 'Review goes here',
    source: 'Facebook',
    date: 'date'
  },
  {
    id: '2',
    name: 'Name',
    starCount: 5,
    review: 'Review goes here',
    source: 'Facebook',
    date: 'date'
  },
  {
    id: '3',
    name: 'Name',
    starCount: 5,
    review: 'Review goes here',
    source: 'Facebook',
    date: 'date'
  },

]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.light
    },
    container: {
      maxWidth: '1000px',
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
    reviews: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1)
    },
    header: {
      padding: '48px',
      color: theme.palette.common.white
    },
    paper: {
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '150px',
        width: '300px',
        color: theme.palette.primary.dark
    },
    btn: {
      padding: '48px'
      
    },
    text: {
        color: theme.palette.secondary.dark
    },
  }));

const Reviews = (props) => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            {/* <Grid container item xs={12} justify="center" >
              <Grid item xs={12} >
                <Typography variant="h3" align="center" className={classes.header}>Reviews</Typography>
              </Grid>
              
            </Grid> */}
           
              <Grid container item xs={12} justify="space-around"  className={classes.reviews}>
                {reviews.map((value) => (
                  <Grid key={value.id} sm={4} xs={12} item >
                    <Paper className={classes.paper} >
                        <ReviewCard  review={{...value}}/>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  

export default Reviews;

