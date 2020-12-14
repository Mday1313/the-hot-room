import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SmallEvent from '../../components/common/EventCard';


// ToDO: replace this with ajax call
const events = [
  {
    id: 1,
    name: 'Costa Rica Retreat',
    location: 'Costa Rica',
    instructor: 'Kyle',
    date: 'Month, 11, year',
    time: '3pm',
    url: '',
    image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
},
{
    id: 2,
    name: 'Name',
    location: 'Place, Place',
    instructor: 'Instructor',
    date: 'Month, 11, year',
    time: 'time',
    url: '',
    image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0OTE4ODAzMDQwMzE0Njg1/yoga-gettyimages-1142820079-promo.jpg'
},
{
    id: 3,
    name: 'Name',
    location: 'Place, Place',
    instructor: 'Instructor',
    date: 'Month, 11, year',
    time: 'time',
    url: '',
    image: 'https://etimg.etb2bimg.com/photo/75822133.cms'
},
{
  id: 4,
  name: 'Costa Rica Retreat',
  location: 'Costa Rica',
  instructor: 'Kyle',
  date: 'Month, 11, year',
  time: '3pm',
  url: '',
  image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
},
{
  id: 5,
  name: 'Name',
  location: 'Place, Place',
  instructor: 'Instructor',
  date: 'Month, 11, year',
  time: 'time',
  url: '',
  image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0OTE4ODAzMDQwMzE0Njg1/yoga-gettyimages-1142820079-promo.jpg'
},
{
  id: 6,
  name: 'Name',
  location: 'Place, Place',
  instructor: 'Instructor',
  date: 'Month, 11, year',
  time: 'time',
  url: '',
  image: 'https://etimg.etb2bimg.com/photo/75822133.cms'
},
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: theme.palette.common.white
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
                {events.slice(0, 3).map((event) => (
                    <Grid key={event.name} xs={12} md={3} item className={classes.card}>
                        <SmallEvent event={{...event}} />
                    </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} >
                <Grid item xs={12} className={classes.viewAll} align="center">
                  <Button align="center" color="secondary" variant="outlined" href="/events">View All Events</Button>
                </Grid>
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  

export default Events;
