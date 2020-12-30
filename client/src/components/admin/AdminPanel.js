import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { EventForm } from './AdminForms';

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

const AdminPanel = () => {
    const classes = useStyles();

    return(
        <>
            <EventForm />
           
        </>
    )
}

export default AdminPanel;