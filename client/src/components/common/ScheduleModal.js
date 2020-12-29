import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText, 
    Typography
} from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Modal = ({...props}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <span style={{ display: "inline", marginLeft: "20px"}}>
            <Typography style={{ display: "inline"}} variant="h6" color="inherit" onClick={handleClickOpen} >
                {props.title}
            </Typography> 
            <Dialog
                fullScreen={fullScreen}
                fullWidth="true"
                open={open}
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="dialog"
            >
                <DialogContent>
                    <iframe class="_3HLqS" title="htmlComp-iframe" name="htmlComp-iframe" width="100%" height="900px" data-src="" src="https://www-thehotroomtn-com.filesusr.com/html/b2d365_f45e12ef3afdbc5212cb328fc46eb05b.html"></iframe>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="secondary">
                    close
                </Button>
             
                </DialogActions>
            </Dialog>
        </span>
    )
}

export default Modal;