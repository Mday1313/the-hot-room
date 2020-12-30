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
    //  padding: theme.spacing(3),
    
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignContent: 'center',
     
    },

}));

export function EventForm({}) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
        <>
        <Typography gutterBottom color="primary" variant="h4">
        Add New Event
        </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        
        <Grid container xs={12} spacing={3} alignItems="space-around" className={classes.formContainer}>
          
            <Grid item xs={12} md={4} gutterBottom>
                <TextField id="event-name" variant="outlined" fullWidth label="Name"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField 
                    id="event-date" 
                    type="date" 
                    variant="outlined"
                    defaultValue={new Date()} 
                    fullWidth label="Date" InputLabelProps={{
                        shrink: true,
                    }} 
                />
            </Grid>
            <Grid item  xs={12} md={4}>
            <TextField 
                    id="event-time" 
                    type="time" 
                    variant="outlined"
                    
                    fullWidth label="Time" InputLabelProps={{
                        shrink: true,
                    }} 
                />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="event-location" fullWidth label="Location"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="event-price" fullWidth label="Price"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="event-instructor" fullWidth label="Instructor"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                <TextField variant="outlined" id="event-url" fullWidth label="Mindbody url"  />
            </Grid>
            <Grid item  xs={12} md={4}>
                Image upload
            </Grid>
            <Grid item  xs={12} md={4}>
                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                    labelId="status"
                    id="demo-simple-select-filled"
                    value={status}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"active"}>Active</MenuItem>
                    <MenuItem value={"canceled"}>Canceled</MenuItem>
                    <MenuItem value={"rescheduled"}>Rescheduled</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item  xs={12} >
                <TextField 
                    id="event-description" label="Description" 
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
  
