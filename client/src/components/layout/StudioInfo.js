import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: theme.palette.common.white
    },
    container: {
      maxWidth: '1300px',
      padding: theme.spacing(3),
      
    },
    contentBox: {
      padding: theme.spacing(6),
      color: theme.palette.common.grey
    },
   title: {
      paddingBottom: theme.spacing(3)
   },
   body: {
    paddingBottom: theme.spacing(2)
   },
    header: {
      padding: theme.spacing(4),
      color: theme.palette.common.grey
    },
    card: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    video: {
      backgroundColor: theme.palette.grey['200'],
      height: '400px',
      marginTop: theme.spacing(3)
    },
    viewAll: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    btn: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center'
    },
    text: {
        color: theme.palette.secondary.dark
    },
  }));

const StudioInfo = () => {
    const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
              <Grid container item className={classes.header}>
                <Grid item xs={12} >
                  <Typography align="center" variant="h3">welcome to your yoga & fitness destination</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} md={5} justify="space-around"  className={classes.contentBox}>
                <Grid item xs={12} className={classes.title}>
                  <Typography align="center" color="secondary" variant="h5">take a look around...</Typography>
                  <div item xs={12} className={classes.video} align="center">
                 video walk-thru goes here
                  </div>
                </Grid>
              </Grid>
              <Grid container item xs={12} md={7} justify="space-around"  className={classes.contentBox}>
                <Grid item xs={12} className={classes.title}>
                  <Typography align="center" color="secondary" variant="h5">we want you to feel right at home</Typography>
                </Grid>
                <Grid item xs={12} className={classes.body}>
                  <Typography align="left" variant="body1">experience why folks say we have the most amazing community at the hot room! enjoy a delicious draft booch kombucha after class and connect with your fellow yogis in a relaxed and welcoming environment.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.body}>
                  <Typography align="left" variant="body1">the spacious yoga room includes state-of-the-art Flotex flooring; a soft, waterproof and slip-proof surface that is anti-bacterial and anti-microbial. high quality, hospital-grade Green Air purifiers capture airborne impurities to combat odor, bacteria, and viruses delivering fresh, clean, oxygen-rich air to the studio.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.body}>
                  <Typography align="left" variant="body1">the hot room is a proud member of the Original Hot Yoga Association (OH YA!), an organization dedicated to preserving and promoting the therapeutic benefits of the Original Hot Yoga by creating and upholding standards and resources for studios, teachers, classes and teacher trainings.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.body}>
                  <Typography align="left" variant="body1">thank you for supporting a women-owned local business that has been serving the community since 2015. the hot room pays no other franchise or affiliation fees to any other entity, and 100% of your investment supports our studio.
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.btn}>
                  <Button variant="contained" size="medium" color="secondary">
                    Sign Up Now
                  </Button>
                </Grid>
              </Grid>
             
              {/* <Grid container item xs={12} >
                <Grid item xs={12} className={classes.viewAll} align="center">
                  <Typography align="center" variant="h6" component={Link}>see our prices</Typography>
                </Grid>
              </Grid> */}
           
        </Grid>
      </div>
      );
    }
 
  
  

export default StudioInfo;