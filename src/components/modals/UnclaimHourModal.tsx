import React from 'react';
import Modal from '../Modal';

type Props = {
  timeSlotId: number,
  unclaim: (timeSlotId:number) => void
}

const UnclaimHourModal = ({ timeSlotId, unclaim }:Props) => (
  <Modal id="unclaimHourModal" title="Unclaim Hour" text="Are you sure that you want to unclaim this hour?">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => unclaim(timeSlotId)}>Unclaim</button>
  </Modal>
);

export default UnclaimHourModal;
