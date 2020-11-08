import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../resources/images/header1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100vw',
    margin: theme.spacing(1)
  },
  media: {
    height: '200px',
    width: '250px',
    
  },
  btn: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const EventCard = ({...props}) => {
  const classes = useStyles();
console.log(props.event.name)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image1}
          title="Event Card"
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Event Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Date, Time
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Location
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Instructor
          </Typography>
          <Typography variant="h4" color="primary" component="p" align="center">
              $0
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btn}>
       
        <Button variant="contained" size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;