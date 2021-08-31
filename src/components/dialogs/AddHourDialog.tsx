import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type AddHourDialogFields = {
  location: string,
  day: Day,
  hour: number,
  minimumNumberOfAdorers: number
}

type Props = {
  open: boolean,
  handleConfirmAddHour: (fields: AddHourDialogFields) => void,
  handleClose: () => void
}

const AddHourDialog = ({ open, handleConfirmAddHour, handleClose }: Props) => {
  return (
    <Dialog
      open={open}
    >
      <DialogTitle>Add Hour</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will be where the form is.
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
          onClick={() => handleConfirmAddHour()}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddHourDialog;