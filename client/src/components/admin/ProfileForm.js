import React from 'react';
import {
  TextField, 
  Grid, 
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select
} from '@material-ui/core';
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
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
    <Typography gutterBottom color="primary" variant="h4">
        Member Profile
        </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        
        <Grid container xs={12} spacing={3} alignItems="space-around" className={classes.formContainer}>
          
            <Grid item xs={12} md={4} gutterBottom>
                <TextField id="member-name" variant="outlined" fullWidth label="Member Name"  />
            </Grid>
            
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="event-location" fullWidth label="Location"  />
            </Grid>
         
            <Grid item  xs={12} md={4}>
                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                    <InputLabel id="member-status">Member Status</InputLabel>
                    <Select
                    labelId="status"
                    id="demo-simple-select-filled"
                    value={status}
                    onChange={handleChange}
                    >
                      <MenuItem value="student">
                          <em>Student</em>
                      </MenuItem>
                      <MenuItem value="instructor">Instructor</MenuItem>
                  
                    </Select>
                </FormControl>
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="linkedin-url" fullWidth label="Linkedin url"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="facebook-url" fullWidth label="Facebook url"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="instagram-url" fullWidth label="Instagram url"  />
            </Grid>
          
    
            <Grid item  xs={12} >
                <TextField 
                    id="member-bio" label="About Me" 
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                 />
            </Grid>
        </Grid>
      </form>
      </>
  );
}

export default ProfileForm;