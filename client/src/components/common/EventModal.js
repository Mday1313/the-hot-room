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
                <DialogTitle id="dialog" style={{padding: theme.spacing(3)}} >
                    <Typography color="primary" align="center" variant="h3" >{event.name}</Typography>
                    <Typography align="center" variant="h5" >with {event.instructor}</Typography>
                </DialogTitle>
                <DialogContent align="left">
                  <Grid container >
                  <Grid container item xs>
                          <Grid item xs={12} md={6}>
                              <img src={event.image} alt={event.name} width='90%'/>
                          </Grid>
                          <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                              <Grid item container style={{display: 'flex', flexDirection: 'column'}} >
                              <Typography gutterBottom variant="h6" >{event.date} </Typography>
                                <Typography gutterBottom variant="h6" >{event.time}</Typography>
                                <Typography gutterBottom variant="h6" >{event.location}</Typography>
                              </Grid>
                                
                                <Typography gutterBottom variant="body1" >{event.description}</Typography>
                                <Button style={{width: "150px", display: "flex", margin: `16px auto`}}variant="contained"  color="primary" href="/">
                                    RSVP
                                </Button>
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