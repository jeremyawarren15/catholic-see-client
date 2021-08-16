import React, { useState } from 'react';
import DialogContext from '../contexts/DialogContext';

type Props = {
  children: any
}

const DialogProvider = ({ children }:Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenDialog, setChosenDialog] = useState<string>('');

  const openUnclaimHourDialog = () => {
    setChosenDialog('UnclaimHour');
    setOpen(true);
  };

  const openCreateSubRequestDialog = () => {
    setChosenDialog('CreateRequest');
    setOpen(true);
  };

  const openCancelRequestDialog = () => {
    setChosenDialog('CreateRequest');
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{
      open,
      chosenDialog,
      openUnclaimHourDialog,
      openCancelRequestDialog,
      openCreateSubRequestDialog,
      closeDialog,
    }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
