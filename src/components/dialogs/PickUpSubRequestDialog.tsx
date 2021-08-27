import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React from 'react'

type Props = {
  handleConfirmPickUpSubRequest: () => void,
  handleClose: () => void,
  open: boolean
}

const PickUpSubRequestDialog = ({
  open,
  handleConfirmPickUpSubRequest,
  handleClose
}: Props) => {
  return (
    <Dialog
      open={open}
    >
      <DialogTitle>Create Sub Request</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: '15px' }} component="form">
          Are you sure you would like to pick up this hour?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose()}
        >
          Close
        </Button>
        <Button
          onClick={() => handleConfirmPickUpSubRequest()}
          color="success"
        >
          Pick Up
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PickUpSubRequestDialog