import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Reviews = ({ classes }) => {

      return (
        <div className={classes.root}>
          <Grid container className={classes.container} >
            <Grid container item xs={12} justify="center" >
              <Grid item xs={4} >
                <Typography variant="h5" color="primary" align="center" className={classes.header}>you have the power to reclaim your health</Typography>
              </Grid>
              
            </Grid>
           
              <Grid container item xs={12} justify="space-around" spacing={1}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} lg={4} xs={12} item>
                    <Paper className={classes.paper} >Hello</Paper>
                  </Grid>
                ))}
              </Grid>
           
        </Grid>
      </div>
      );
    }
 
  
  const styles = theme => ({
    root: {
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
    btn: {
      padding: '48px'
      
    },
    text: {
        color: theme.palette.secondary.dark
    },
  
})

export default withStyles(styles)(Reviews);

