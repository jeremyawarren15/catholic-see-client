import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React from 'react';

type Props = {
  open: boolean,
  handleConfirmCancelRequest: () => void,
  handleClose: () => void
}

const CancelRequestDialog = ({ open, handleConfirmCancelRequest, handleClose }:Props) => (
  <Dialog open={open}>
    <DialogTitle>Cancel Request</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure that you want to cancel this sub request?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => handleClose()}
      >
        Close
      </Button>
      <Button
        color="error"
        onClick={() => handleConfirmCancelRequest()}
      >
        Cancel Request
      </Button>
    </DialogActions>
  </Dialog>
);

export default CancelRequestDialog;
