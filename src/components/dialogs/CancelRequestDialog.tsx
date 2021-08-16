import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React, { useContext } from 'react';

import DialogContext from '../../contexts/DialogContext';

type Props = {
  open: boolean,
  handleConfirmCancelRequest: () => void
}

const CancelRequestDialog = ({ open, handleConfirmCancelRequest }:Props) => {
  const { closeDialog } = useContext(DialogContext);

  return (
    <Dialog open={open}>
      <DialogTitle>Cancel Request</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure that you want to cancel this sub request?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => closeDialog()}
        >
          Close

        </Button>
        <Button>Cancel Request</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelRequestDialog;
