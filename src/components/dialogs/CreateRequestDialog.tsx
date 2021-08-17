import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React from 'react';

type Props = {
  open: boolean,
  handleConfirmCreateRequest: () => void,
  handleClose: () => void
}

const CreateRequestDialog = ({ open, handleConfirmCreateRequest, handleClose }:Props) => (
  <Dialog open={open}>
    <DialogTitle>Create Sub Request</DialogTitle>
    <DialogContent>
      <DialogContentText>
        This needs to be filled in with actual data.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => handleClose()}
      >
        Close
      </Button>
      <Button
        color="success"
        onClick={() => handleConfirmCreateRequest()}
      >
        Create Request
      </Button>
    </DialogActions>
  </Dialog>
);

export default CreateRequestDialog;
