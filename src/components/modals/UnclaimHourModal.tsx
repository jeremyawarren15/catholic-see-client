import React from 'react';
import Modal from '../Modal';

const UnclaimHourModal = () => (
  <Modal id="unclaimHourModal" title="Unclaim Hour" text="Are you sure that you want to unclaim this hour?">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" className="btn btn-danger">Unclaim</button>
  </Modal>
);

export default UnclaimHourModal;
