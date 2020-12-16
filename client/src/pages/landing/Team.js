import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import img from '../../resources/images/HR_16.jpg';
import team1 from '../../resources/images/WS-2.jpg';
import team2 from '../../resources/images/HR-109.jpg';
import team3 from '../../resources/images/HR-8.jpg';
import team4 from '../../resources/images/HR-9.jpg';
import Grid from '@material-ui/core/Grid';
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
    },
    {
        id: 5,
        name: 'Sky Loguidice',
        bio: 'Brief Description',
        image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
    },
    {
        id: 6,
        name: 'Robbie Short',
        bio: 'Brief Description',
        image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
    },
    {
        id: 7,
        name: 'Anna Heath',
        bio: 'Brief Description',
        image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
      
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
        
    }
}))

const Team = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SmallHero img={img} alt="Team Hero" title="Meet the Team"/>
            <Grid container item xs={12} className={classes.team}>
                <img src={img} alt="team photo" width="700px"/>
            </Grid>
            <Grid container item  xs={12} className={classes.individuals}>
                {instructors.map((instructor) => (
                    <Grid item xs={12} lg={3} key={instructor.id} align="center" className={classes.individual}>
                        <img src={instructor.image} alt={instructor.name} height="400px"/>
                <div className="team-overlay">{instructor.name}</div>
                    </Grid>
                    
                ))}
            </Grid>
           

        </div>
    )
}

export default Team;