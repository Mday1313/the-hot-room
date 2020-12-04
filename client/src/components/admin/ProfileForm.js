import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
   padding: theme.spacing(3),
  
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'
  }
}));

const ProfileForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <Grid container className={classes.formContainer}>
        <Grid item xs={4}>
            <TextField id="profile-name" label="Name" variant="filled" />
        </Grid>
        <Grid item  xs={4}>
            <TextField id="profile-name" label="Name" variant="filled" />
        </Grid>
        <Grid item  xs={4}>
            <TextField id="profile-name" label="Name" variant="filled" />
        </Grid>
      </Grid>
    </form>
  );
}

export default ProfileForm;