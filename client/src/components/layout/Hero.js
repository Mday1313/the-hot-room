import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import image1 from '../../resources/images/header1.jpg';
import image2 from '../../resources/images/header2.jpg';
import image3 from '../../resources/images/header3.jpg';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// TODO: Add alt content for studio images
const tutorialSteps = [
  {
    id: 1,
    label: '1',
    imgPath: image1,
    position: 'bottom'
  },

  {
    id: 2,
    label: '2',
    imgPath: image2,
    position: 'top'
  },
 
  {
    id: 3,
    label: '3',
    imgPath: image3,
    position: 'top'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    margin: '0 auto',
    
  },
  // overlay: {
  //   height: '100vh',
  //   background: theme.palette.background.overlay,
  //   zIndex: 10
  // },
  controls: {
    position: 'relative',
    bottom: 35,
    background: "transparent",
    color: '#fff',
    justifyContent: 'center'
  },
  img: {
    height: '90vh',
    display: 'block',
    maxWidth: '100vw',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  label: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    background: theme.palette.background.overlay,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
    maxWidth: '30%',
    zIndex: 100,
    borderRadius: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  btn: {
    margin: 'auto'
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <div className={classes.label}>
      <Typography variant="h2" component="h1" align="center" >welcome to your yoga & fitness destination</Typography>
      <Button className={classes.btn} color="secondary" variant="contained" href="https://clients.mindbodyonline.com/classic/ws?studioid=5398&stype=-98">Book Now</Button>
      </div>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
       
        {tutorialSteps.map((step, index) => (
         
          <div key={step.id}>
            
            {Math.abs(activeStep - index) <= 2 ? (
               
              <div className={classes.img} style={{backgroundImage: `linear-gradient(rgba(0,0,0, .5),rgba(0,0,0, .5)), url(${step.imgPath})`,  backgroundPosition: `center ${step.position ?? 'center'}`}}> </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default SwipeableTextMobileStepper;
