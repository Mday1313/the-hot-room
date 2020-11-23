import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import image1 from '../../resources/images/header1.jpg';
import image2 from '../../resources/images/header2.jpg';
import image3 from '../../resources/images/header3.jpg';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// TODO: Add alt content for studio images
const tutorialSteps = [
  {
    label: '1',
    imgPath: image1,
  },

  {
    label: '2',
    imgPath:
      image2,
  },
 
  {
    label: '3',
    imgPath:
      image3,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    margin: '0 auto'
  },
  controls: {
    position: 'relative',
    bottom: 35,
    background: "transparent",
    color: '#fff',
    justifyContent: 'center'
  },
  img: {
    height: '80%',
    display: 'block',
    maxWidth: '100vw',
    overflow: 'hidden',
    width: '100%',
  },
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
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
               
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
   
    </div>
  );
}

export default SwipeableTextMobileStepper;
