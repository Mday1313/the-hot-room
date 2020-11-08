import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EventCard from '../../components/common/EventCard';
import Link from '@material-ui/core/Link';

const events = [
    {
        name: 'Event Name',
        date: 'Date',
        time: 'time',
        location: 'location',
        instructor: 'instructor',
        status: '',
        image: ''
    },
    {
        name: 'Event 2',
        date: '',
        time: '',
        location: '',
        instructor: '',
        status: '',
        image: ''
    },
    {
        name: 'Event 3',
        date: '',
        time: '',
        location: '',
        instructor: '',
        status: '',
        image: ''
    },
    {
      name: '',
      date: '',
      time: '',
      location: '',
      instructor: '',
      status: '',
      image: ''
  }
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
       
    },
    container: {
      maxWidth: '1000px',
      padding: theme.spacing(4),
      
    },
    textBox: {
      paddingBottom: theme.spacing(4)
    },
    events: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1)
    },
    header: {
      padding: theme.spacing(4),
      color: theme.palette.common.grey
    },
    card: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    viewAll: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    btn: {
      padding: theme.spacing(2)
      
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
              <Grid container item className={classes.header}>
                <Grid item xs={12} >
                  <Typography align="center" variant="h3">Upcoming Events</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="space-around"  className={classes.events}>
                {events.map((value) => (
                    <Grid key={value.name} xs={12} md={3} item className={classes.card}>
                        <EventCard   event={{...value}} />
                    </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} >
                <Grid item xs={12} className={classes.viewAll} align="center">
                  <Typography align="center" variant="h6" component={Link} to="/events">View All Events</Typography>
                </Grid>
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  

export default Events;
