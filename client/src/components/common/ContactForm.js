import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
       
      },
      input: {
        color: theme.palette.primary,  
        
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        // width: '25ch',
      },
      button: {
          margin: theme.spacing(2)
      }
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
  
     
      <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
           fullWidth
           id="name"
           label="Name"
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
            fullWidth
            id="email"
            label="Email"
            />
        </FormControl>
         <FormControl  fullWidth className={classes.margin} variant="outlined">
          <InputLabel  className={classes.input} htmlFor="comment">Comment</InputLabel>
          <OutlinedInput
           
           fullWidth
           id="comment"
           label="Comment"
           multiline
           rows={4}
           color="primary"
          />
        </FormControl>
        <FormControl className={classes.button} fullWidth >
            <Button align="right" variant="contained" color="secondary">Submit</Button>
        </FormControl>
    </form>
  );
}