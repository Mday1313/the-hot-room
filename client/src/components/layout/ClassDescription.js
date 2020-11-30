import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '400px',
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(3),
        color: theme.palette.common.grey,
        border: '1px solid #4a4a4a',
        borderRadius: '10px',
        boxShadow: ' 0 15px 10px #999'
    },
    imageContainer: {
    
        overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2)
    },
    classTitle: {
        // textAlign: 'center',
        // width: '100%',
        paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2),
    }
}))

const ClassDescription = ({...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
    
                
            <div className={classes.imageContainer}>
                <Typography variant="h5" className={classes.classTitle} align="center">{props.item.name}</Typography>
                
                <Typography variant="body1" className={classes.classDescription} align="center">{props.item.desc}</Typography>
            </div>
                      
                 
              
             
         
        </div>
    )
}

export default ClassDescription;