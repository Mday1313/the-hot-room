import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // height: '150px',
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingLeft: theme.spacing(6)
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    btn: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    icon: {
        marginTop: theme.spacing(2)
    }
}))

const DashHeader = () => {
    const classes = useStyles();

    return(
        <Paper elevation={0} className={classes.root}>
            <div>
                <Avatar className={classes.avatar} alt="" src=""/>
                <Button className={classes.icon} variant="outlined" color="primary">
                    <PhotoCameraIcon />
                </Button>
            </div>
            
            <div>
                <Button className={classes.btn} variant="contained" color="secondary">
                    Member Directory
                </Button>
                <Button className={classes.btn} variant="contained" color="secondary">
                    Media Directory
                </Button>
                {/* <Button className={classes.btn}variant="contained" color="secondary">
                    Member Diretory
                </Button> */}
            </div>
        </Paper>
    )
}

export default DashHeader;