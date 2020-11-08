import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const infoCards = [
  {id: 1, icon: 'A', content: 'life is too short to live in pain'},
  {id: 2, icon: 'B', content: 'you have the power to reclaim your health'},
  {id: 3, icon: 'C', content: 'lorem ipsum'}
];

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.main,
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
      maxWidth: '1000px',
    },
    header: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(12)
    },
    infoContainer: {
      position: 'relative',
    },
    paper: {
        // width: '200px',
        margin: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-around',
        height: '300px',
        border: `2px solid ${theme.palette.primary.main}`

    },
    icon: {
      width: '100px',
      height: '100px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      margin: 'auto',
      position: 'absolute',
      top: '-30px',
      left: '135px',
      [theme.breakpoints.up('md')]: {
        left: '115px',
      },
      
    },
    infoContent: {
      padding: theme.spacing(5)
    },
    btnContainer: {
      padding: '48px'
    },
    btnHead: {
      padding: '16px'
    },
    text: {
        color: theme.palette.secondary.dark

    }
  }));

const InfoCards = ({  }) => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            <Grid container item xs={12} justify="center" >
              <Grid item xs={12} >
                <Typography variant="h3" color="primary" align="center" className={classes.header}>
                    why join the hot room yoga & wellness
                </Typography>
              </Grid>
              
            </Grid>
          
            <Grid container item xs={12} justify="space-around" spacing={2}>
              {infoCards.map((infoCard) => (
                <Grid key={infoCard.id} xs={12} sm={4}  item className={classes.infoContainer}>
                    <div className={classes.icon}>
                      
                    </div>
                  <Paper className={classes.paper} spacing={2} elevation={3}>
                   
                    <Typography align="center" variant="h5" className={classes.infoContent}>{infoCard.content}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

          <Grid className={classes.btnContainer} container item xs={12} justify="center">
            <Grid className={classes.btnHead} item xs={12}>
              <Typography variant="h4" color="primary" align="center" >
                get pain free today
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Button variant="contained" color="secondary" >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      );
    }
 
  
  

export default InfoCards;

