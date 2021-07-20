import React from 'react';
import Modal from '../Modal';

const CancelRequestModal = () => (
  <Modal
    id="cancelRequestModal"
    text="Are you sure you want to cancel this substitution request?"
    title="Cancel Request"
  >
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" className="btn btn-danger">Cancel Request</button>
  </Modal>
);

export default CancelRequestModal;
