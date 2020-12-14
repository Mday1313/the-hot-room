import React from 'react';
import {
    Route,
    NavLink,
    Redirect
  } from 'react-router-dom';
import MediaItem from '../admin/MediaItem';
import FilterBtns from '../common/FilterBtns';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    },
    card: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    }, 
    videos: {
        margin: theme.spacing(2)
    }
}))

const videos = [
    {
        id: 1,
        name: 'Video 1',
        desc: 'bio goes here',
        src: ''
    },
    {
        id: 2,
        name: 'Video 2',
        desc: 'desc goes here',
        src: ''
    },
    {
        id: 3,
        name: 'Video 3',
        desc: 'desc goes here',
        src: ''
    },
    {
        id: 4,
        name: 'Video 4',
        desc: 'desc goes here',
        src: '/../../resources/images/WS-2.jpg'
    },
    {
        id: 5,
        name: 'Member Two',
        desc: 'desc goes here',
        src: '../../resources/images/WS-2.jpg'
    },

]
const videoFilters = [
    {
        id: 1,
        title: 'Video',
        url: 'video'
    },
    {
        id: 2,
        title: 'Audio',
        url: 'audio'
    },
    {
        id: 3,
        title: 'Saved',
        url: 'saved'
    },
    {
        id: 4,
        title: 'Recently Added',
        url: 'recent'
    },
]

const VideoList = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid container item xs={12} justify="space-between">
                <Grid item xs={6}>
                    <Typography variant="h3" align="left" component="h1">Media</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FilterBtns filters={videoFilters}/>
                </Grid>
            </Grid>
             <Grid container item xs={12} justify="space-around"  className={classes.members}>
                {videos.map((video) => (
                    <Grid key={video.id} xs={12} md={10} item className={classes.card}>
                        <MediaItem video={video}/>
                    </Grid>
                ))}
              </Grid>
        </Grid>
    )
}

export default VideoList;