import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/images/logo_flame.png'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '200px',
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(3),
        color: theme.palette.common.grey,
        background: 'linear-gradient(#7498be, #b8cddd, #fedcd2)',
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '10px',
        boxShadow: ' 0 15px 10px #999'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2),
      margin: 'auto'
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
        <div className={classes.root}>   
            <div className={classes.imageContainer}>
                <img src={logo} className={classes.logo} alt="the hot room"  width="50px"/>
                <Typography variant="h5" className={classes.classTitle} align="center">{props.item.name}</Typography>
                
                <Typography variant="body1" className={classes.classDescription} align="center">{props.item.desc}</Typography>
            </div>
        </div>
    )
}

export default ClassDescription;