
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
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
       <footer align="bottom" position="fixed">
           
        {/* <Container className={classes.container}>
        
        </Container> */}
           
    
       </footer>
    )
};
  
const styles = theme => ({
    container: {
        // padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }, 
  
})
    

export default withStyles(styles)(Footer);