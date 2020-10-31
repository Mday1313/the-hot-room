import React from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.common.white
      },
      input: {
        color: theme.palette.primary
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        // width: '25ch',
      },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
  
      <div>
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
         <FormControl color="info" fullWidth className={classes.margin} variant="outlined">
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
      </div>
    </form>
  );
}