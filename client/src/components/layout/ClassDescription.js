import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';
import logo from '../../resources/images/logo_flame.png'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '200px',
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: theme.spacing(3),
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(3),
        color: theme.palette.common.grey,
        background: '#fff',
        boxShadow: ' 0px 2px 3px #999'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      margin: 'auto',
   
    },
    classTitle: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    logo: {
        margin: 'auto'
    }
}))

const ClassDescription = ({...props}) => {
    const classes = useStyles();

    return (
        <Grid container xs={12} md={8} className={classes.root}>   
           
            <Grid item xs={12}>
                <div className={classes.imageContainer}>
                    <img src={logo} className={classes.logo} alt="the hot room"  width="30px"/>
                </div>
                <Typography variant="h5" className={classes.classTitle} align="center">{props.item.name}</Typography>
                
                <Typography variant="body1" className={classes.classDescription} align="center">{props.item.desc}</Typography>
            </Grid>
               
            
        </Grid>
    )
}

export default ClassDescription;