
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Footer = ({ classes, router }) => {
    // const [auth, setAuth] = React.useState(true);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <footer align="bottom" position="fixed" className={classes.root}>
            <Grid container >
                <Grid xs={12} container item className={classes.container} align="center">
                    <Grid xs={12} lg={4} item>
                        location
                    </Grid>
                    <Grid xs={12} lg={4} item>
                        logo
                    </Grid>
                    <Grid xs={12} lg={4} item>
                        contact us
                    </Grid>
                </Grid>
                
                <Grid xs={12} container item className={classes.copyright} justify="center" align="center">
                    <Grid item xs={12}>
                        <Typography variant="body" >&#169; 2020 the hot room</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body" >Built by Melissa Day</Typography>
                    </Grid>
                </Grid>
            </Grid> 
           
    
       </footer>
    )
};
  
const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: '48px',
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        height: '100px'
      }, 
      copyright: {
        backgroundColor: '#424242',
        color: theme.palette.primary.contrastText,
        padding: '16px'
      }
  
})
    

export default withStyles(styles)(Footer);