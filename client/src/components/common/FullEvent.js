import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import logo from '../../resources/images/logo_flame.png'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(8)
    },
    media: {
        height: '600px',
       
    },
    layer: {
        position: 'absolute',
        backgroundColor: theme.palette.primary.overlay,
        color: theme.palette.common.white,
        top: 0,
        bottom: '45px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    topText: {
        paddingTop: theme.spacing(2),
    
        textAlign: 'center'
    },
    // logo: {
    //     margin: '0 auto',
    // },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'start', 
        alignItems: 'center'
    },
    avatar: {
        margin: '5px',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    front: {
        height: '600px',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',  
    },
    back: {
        background: theme.palette.common.white,
        display: 'none'
    }
}))

const FullEvent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card elevation={3} className={classes.front} >
                <CardMedia
                    className={classes.media}
                    image={props.event.image}
                    title={props.event.title}
                    />
               
                <CardContent className={classes.layer}>
                    <div className={classes.topText}>
                        <img src={logo} className={classes.logo} alt="the hot room" height="50px"/>
                        <Typography variant="h3" align="center">{props.event.name}</Typography>
                    </div>
                    <div className={classes.bottomText}>
                        <Typography variant="h6">{props.event.location}</Typography>
                        <div className={classes.avatarContainer}>
                            <Avatar alt={props.event.instructor} src="/src/resources/images/WS-2.jpg" className={classes.avatar} />
                            <Typography variant="h6" >
                        
                        {props.event.instructor}</Typography>
                        </div>
                        <Typography variant="h6">{props.event.date}</Typography>
                        <Typography variant="h6">{props.event.time}</Typography>
                    </div>
                  
                </CardContent>
             
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default FullEvent;