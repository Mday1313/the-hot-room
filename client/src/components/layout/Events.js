import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EventCard from '../../components/common/EventCard';



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
    events: {
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

const Events = () => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
              <Grid container item xs={12} justify="space-around"  className={classes.events}>
                {[0, 1, 2].map((value) => (
                  <EventCard />
                ))}
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  

export default Events;
