import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/lab';

import React, { useState } from 'react';

type Props = {
  open: boolean,
  day: number,
  handleConfirmCreateRequest: (chosenDate:Date) => void,
  handleClose: () => void
}

const CreateRequestDialog = ({
  open, day, handleConfirmCreateRequest, handleClose,
}:Props) => {
  const [chosenDate, setChosenDate] = useState<Date>(new Date());

  const disableAllDaysExceptDay = (date:Date) => {
    if (date < new Date()) return true;
    return date.getDay() !== day;
  };

  const handleClick = () => {
    if (disableAllDaysExceptDay(chosenDate)) {
      return;
    }
    handleConfirmCreateRequest(chosenDate);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Create Sub Request</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: '15px' }} component="form">
          Life happens! What day are you going to need a sub?
        </DialogContentText>
        <DatePicker
          label="Date of Substitution"
          value={chosenDate}
          allowSameDateSelection
          onChange={(newValue) => setChosenDate(newValue)}
          shouldDisableDate={disableAllDaysExceptDay}
          renderInput={(params) => <TextField {...params} />}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose()}
        >
          Close
        </Button>
        <Button
          color="success"
          onClick={() => handleClick()}
        >
          Create Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateRequestDialog;
