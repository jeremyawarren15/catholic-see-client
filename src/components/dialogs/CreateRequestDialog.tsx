import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import React, { useContext } from 'react';

import DialogContext from '../../contexts/DialogContext';

type Props = {
  open: boolean,
  handleConfirmCreateRequest: () => void
}

const CreateRequestDialog = ({ open, handleConfirmCreateRequest }:Props) => {
  const { closeDialog } = useContext(DialogContext);

  return (
    <Dialog open={open}>
      <DialogTitle>Create Sub Request</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This needs to be filled in with actual data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => closeDialog()}
        >
          Close
        </Button>
        <Button
          color="success"
        >
          Create Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateRequestDialog;
