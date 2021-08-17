import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React from 'react';

type Props = {
  open: boolean,
  handleConfirmUnclaimHour: () => void,
  handleClose: () => void
}

const UnclaimHourDialog = ({ open, handleConfirmUnclaimHour, handleClose }:Props) => (
  <Dialog open={open}>
    <DialogTitle>Unclaim Hour</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure that you want to unclaim this hour?
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
        onClick={() => {
          handleConfirmUnclaimHour();
        }}
      >
        Unclaim
      </Button>
    </DialogActions>
  </Dialog>
);

export default UnclaimHourDialog;
