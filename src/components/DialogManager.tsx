import React, { useContext } from 'react';
import DialogContext from '../contexts/DialogContext';
import CancelRequestDialog from './dialogs/CancelRequestDialog';
import CreateRequestDialog from './dialogs/CreateRequestDialog';
import UnclaimHourDialog from './dialogs/UnclaimHourDialog';

const DialogManager = () => {
  const {
    chosenDialog,
    open,
  } = useContext(DialogContext);

  switch (chosenDialog) {
    case 'CancelRequest':
      return <CancelRequestDialog open={open} />;
    case 'UnclaimHour':
      return <UnclaimHourDialog open={open} />;
    case 'CreateRequest':
      return <CreateRequestDialog open={open} />;
    default:
      return null;
  }
};

export default DialogManager;
