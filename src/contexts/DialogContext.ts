/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type DialogContextDetails = {
  open: boolean,
  chosenDialog: string,
  openUnclaimHourDialog: () => void,
  openCreateSubRequestDialog: () => void,
  openCancelRequestDialog: () => void,
  closeDialog: () => void
}

// UserContext contains a list of all the parishIds
// that the current user is an admin for
const DialogContext = createContext<DialogContextDetails>({} as DialogContextDetails);

export default DialogContext;
