import React from 'react';
import Member from '../admin/Member';
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
    members: {
        margin: theme.spacing(2)
    }
}))

const members = [
    {
        id: 1,
        name: 'Kyle Casserly',
        bio: 'bio goes here',
        img: ''
    },
    {
        id: 2,
        name: 'Member Two',
        bio: 'bio goes here',
        img: ''
    },
    {
        id: 3,
        name: 'Member Three',
        bio: 'bio goes here',
        img: ''
    },
    {
        id: 4,
        name: 'Kyle Casserly',
        bio: 'bio goes here',
        img: '/../../resources/images/WS-2.jpg'
    },
    {
        id: 5,
        name: 'Member Two',
        bio: 'bio goes here',
        img: '../../resources/images/WS-2.jpg'
    },
    {
        id: 6,
        name: 'Member Three',
        bio: 'bio goes here',
        img: '../../resources/images/WS-2.jpg'
    },
    {
        id: 7,
        name: 'Member Two',
        bio: 'bio goes here',
        img: '../../resources/images/WS-2.jpg'
    },
    {
        id: 8,
        name: 'Member Three',
        bio: 'bio goes here',
        img: '../../resources/images/WS-2.jpg'
    },
]
const filters = [
    {
        id: 1,
        title: 'Teachers',
        url: 'teachers'
    },
    {
        id: 2,
        title: 'Students',
        url: 'students'
    },
    {
        id: 3,
        title: 'Favorites',
        url: 'favorites'
    },
]

const MemberList = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid container item xs={12} justify="space-between">
                <Grid item xs={6}>
                    <Typography variant="h3" align="left" component="h1">Members</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FilterBtns filters={filters}/>
                </Grid>
            </Grid>
             <Grid container item xs={12} justify="space-around"  className={classes.members}>
                {members.map((member) => (
                    <Grid key={member.id} xs={12} md={4} item className={classes.card}>
                        <Member member={member}/>
                    </Grid>
                ))}
              </Grid>
        </Grid>
    )
}

export default MemberList;