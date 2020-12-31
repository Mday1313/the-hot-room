import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import Header from '../../components/layout/Header';
import headImg from '../../resources/images/teamHero.jpg';
import img from '../../resources/images/HR_16.jpg';
import team1 from '../../resources/images/WS-2.jpg';
import team2 from '../../resources/images/HR-109.jpg';
import team3 from '../../resources/images/HR-8.jpg';
import team4 from '../../resources/images/HR-9.jpg';
import {
    Grid, 
    Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const instructors = [
    {
        id: 1,
        name: 'Kyle Casserly',
        bio: 'Brief Description',
        image: team1
    },
    {
        id: 2,
        name: 'Jessyca Livingston',
        bio: 'Brief Description',
        image: team2
    },
    {
        id: 3,
        name: 'Chelsea Young',
        bio: 'Brief Description',
        image: team3
    },
    {
        id: 4,
        name: 'Roland Landers',
        bio: 'Brief Description',
        image: team4
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.background.default
    },
    team: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center'

    }, 
    individuals: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    individual: {
        padding: theme.spacing(4),
        
    },
    media: {
        // height: ,
        marginTop: '56.25%' // 16:9
     },
     card: {
        position: 'relative',
        background: theme.palette.secondary.light,
        paddingTop: theme.spacing(1)
     },
     overlay: {
        position: 'absolute',
        bottom: '0px',

        width: '100%',
        color: 'black',
        backgroundColor: theme.palette.secondary.light,
        padding: theme.spacing(3)
     }
}))

const Team = () => {
    const classes = useStyles();
    
    return (
        <>
        <Header />
        <div className={classes.root}>
            <SmallHero img={headImg} alt="Team Hero" title="Meet the Team"/>
            {/* <Grid container item xs={12} className={classes.team}>
                <img src={img} alt="team photo" width="700px"/>
            </Grid> */}
            <Grid container item  xs={12} className={classes.individuals}>
                {instructors.map((instructor) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={instructor.id} align="center" className={classes.individual}>
                        <div className={classes.card}>
                             <img classeName={classes.media} src={instructor.image} alt={instructor.name} height="400px"/>
                            <div className={classes.overlay}>
                                <Typography variant="h6"> {instructor.name}</Typography>
                           
                            </div>
                        </div>
                       
              
                    </Grid>
                    
                ))}
            </Grid>
           
        </div>
    </>
    )
}

export default Team;