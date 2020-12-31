import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: theme.palette.secondary.light,
       
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
      
    },
    avatarHolder: {
        width: '13%',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1)
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
    main: {
        paddingBottom: theme.spacing
    },
    btn: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
  
}))

const DashHeader = () => {
    const classes = useStyles();

    return(
        <Paper elevation={2} className={classes.root} >
            <div className={classes.avatarHolder}>
                <Avatar className={classes.avatar} alt="" src=""/>
                <IconButton className={classes.icon}  color="primary">
                    <PhotoCameraIcon />
                </IconButton>
            </div>
        </Paper>
       
    )
}

export default DashHeader;
