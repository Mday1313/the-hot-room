import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const InfoCards = ({ classes }) => {

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            <Grid container item xs={12} justify="center" >
              <Grid item xs={12} >
                <Typography variant="h4" color="primary" align="center" className={classes.header}>
                  life is too short to live in pain
                </Typography>
              </Grid>
              
            </Grid>
          
            <Grid container item xs={12} justify="space-around" spacing={1}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} xs={12} lg={4} item>
                  <Paper className={classes.paper} >Hello</Paper>
                </Grid>
              ))}
            </Grid>

          <Grid className={classes.btnContainer} container item xs={12} justify="center">
            <Grid className={classes.btnHead} item xs={12}>
              <Typography variant="h6" color="primary" align="center" >
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
 
  
  const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
      maxWidth: '1000px',
    },
    header: {
      padding: '48px',
    },
    paper: {
        width: '200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        height: '300px'
    },
    btnContainer: {
      padding: '48px'
    },
    btnHead: {
      padding: '16px'
    },
    text: {
        color: theme.palette.secondary.dark

    },
  
})

export default withStyles(styles)(InfoCards);

