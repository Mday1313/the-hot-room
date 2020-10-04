
import withStyles from "@material-ui/core/styles/withStyles"
// import Slider from "@material-ui/core/Slide"


const Carousel = ({ classes }) => {
    return (
        <div className={classes.container}>
            <div className="">
                <img src="static/images/Hot Yoga Studio HR-30.jpg"  width="100%"/>
            </div>
        </div>
   
    );
  }


const styles = theme => ({

})

export default withStyles(styles)(Carousel);

