import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    member: {
        padding: theme.spacing(2)
    },
    memberImg: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}))

const Member = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.member} key={props.member.id} elevation={3}>
            {/* <FavoriteIcon id={props.member.id} /> */}
            <div>
                <Avatar alt={props.member.name} src={props.member.img} className={classes.memberImg} />
                <h3>{props.member.name}</h3>
                <h4>{props.member.status}</h4>
                <p>{props.member.bio}</p>
            </div>
           
      </Paper>
    )
}

export default Member;