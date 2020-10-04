import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const InfoCards = ({ classes }) => {

      return (
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={6}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} >Hello</Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid className={classes.btn} item xs={12}>
          Button goes here
        </Grid>
      </Grid>
     
      );
    }
 
  
  const styles = theme => ({
    container: {
        backgroundColor: theme.palette.primary.light,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        
    },
    paper: {
        width: '200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        height: '300px'
    },
    text: {
        color: theme.palette.secondary.dark

    },
  
})

export default withStyles(styles)(InfoCards);

