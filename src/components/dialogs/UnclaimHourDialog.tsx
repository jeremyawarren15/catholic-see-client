import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React, { useContext } from 'react';

import DialogContext from '../../contexts/DialogContext';

type Props = {
  open: boolean,
  handleConfirmUnclaimHour: () => void
}

const UnclaimHourDialog = ({ open, handleConfirmUnclaimHour }:Props) => {
  const { closeDialog } = useContext(DialogContext);
  return (
    <Dialog open={open}>
      <DialogTitle>Unclaim Hour</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure that you want to unclaim this hour?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => closeDialog()}
        >
          Close
        </Button>
        <Button
          color="error"
        >
          Unclaim

        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UnclaimHourDialog;
