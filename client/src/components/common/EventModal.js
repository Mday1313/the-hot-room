import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText, 
    Typography,
    Grid
} from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FullEvent from './FullEvent'

const EventModal = ({...props}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const event = props.event;

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div style={{ margin: 'auto'}}>
            <Typography  variant="h6" color="primary" onClick={handleClickOpen} >
                Learn More
            </Typography> 
            <Dialog
                fullScreen={fullScreen}
                fullWidth="true"
                open={open}
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="dialog"
            >
                <DialogTitle id="dialog">
                    <Typography style={{padding: theme.spacing(3)}} align="center" variant="h3" >{event.name}</Typography>
                </DialogTitle>
                <DialogContent align="center">
                  <Grid container >
                      <Grid container item  >
                          <Grid item xs={12} md={6}>
                              <img src={event.image} alt={event.name} width='80%'/>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body1" >Location: {event.location}</Typography>
                          </Grid>
                      </Grid>
                      <Grid container item >
                          <Grid item xs={12} >
                          <Typography variant="body1" >{event.description}</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="secondary">
                    close
                </Button>
             
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EventModal;