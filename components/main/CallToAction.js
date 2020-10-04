import withStyles from "@material-ui/core/styles/withStyles"
// import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

const CallToAction = ({ classes }) => {
   
     
      return (
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    feel better than ever
                </Typography>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    increase flexibility
                </Typography>
                <Typography variant="h5" component="h1"  className={classes.text}>
                    relieve pain
                </Typography>
            </div>
        </div>
     
      );
    }
 
  
  const styles = theme => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        
    },
    textContainer: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
       
    },
    text: {
        color: theme.palette.secondary.dark

    },
  
})

export default withStyles(styles)(CallToAction);