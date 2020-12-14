import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    video: {
        padding: theme.spacing(2)
    },
    videoImg: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}))

const Video = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.video} key={props.video.id} elevation={1}>
     
            <h3>{props.video.name}</h3>
           
            <p>{props.video.desc}</p>
      </Paper>
    )
}

export default Video;