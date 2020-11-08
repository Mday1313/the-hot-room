import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import waymat from '../../resources/images/logos/waymat.png';
import vireo from '../../resources/images/logos/sanz.png';
import cannaroo from '../../resources/images/logos/cannaroo.png';
import rawdeal from '../../resources/images/logos/rawdeal.png';
import beauty from '../../resources/images/logos/beautycounter.png';
import superieur from '../../resources/images/logos/superieur.png';




const partners = [
    {
        alt: 'Waymat',
        imgPath: waymat,
        link: 'https://waymat.com/'
    },
    {
        alt: 'Vireo Systems',
        imgPath: vireo,
        link: 'https://vireosystems.com/'
    },
    {
        alt: 'Cannaroo',
        imgPath: cannaroo,
        link: 'https://cannaroo.com/ref/thehotroomtn'
    },
    {
        alt: 'The Raw Deal',
        imgPath: rawdeal,
        link: 'https://www.therawdealnashville.com/'
    },
    {
        alt: 'BeautyCounter',
        imgPath: beauty,
        link: 'https://www.beautycounter.com/'
    },
    {
        alt: 'Superieur',
        imgPath: superieur,
        link: 'https://superieurelectrolytes.com/'
    },
]


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white
    },
    container: {
        padding: theme.spacing(2)
    },
    textBox: {
        padding: theme.spacing(4),
        maxWidth: '600px',
        margin: 'auto'
    },
    title: {
        paddingBottom: theme.spacing(3),
        color: theme.palette.common.grey
    },
    logos: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(6),
      margin: 'auto'
    }
}));

const Partners = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container className={classes.container}>
                <Grid container item className={classes.textBox}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h3" align="center" >Partners</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.subtitle}>
                        <Typography align="center" variant="subtitle1" color="primary">we have partnered with our favorite brands to enhance your experience at the studio! check them out online and in the studio!</Typography>
                    </Grid>
                </Grid>
                <Grid container item className={classes.logos} align="center">
                    {/* map through image list */}
                    {partners.map((value) => (
                    <Grid key={value.alt} sm={2} xs={12} item className={classes.logo}>
                        <Link href={value.link}>
                            <img src={value.imgPath} alt={value.alt} width="150px"/>
                        </Link>
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Partners;