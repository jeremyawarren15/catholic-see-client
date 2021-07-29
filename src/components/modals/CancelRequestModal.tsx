import React from 'react';
import Modal from '../Modal';

type Props = {
  subRequestId: number,
  handleCancelRequest: (subRequestId:number) => void
}

const CancelRequestModal = ({ subRequestId, handleCancelRequest }:Props) => (
  <Modal
    id="cancelRequestModal"
    text="Are you sure you want to cancel this substitution request?"
    title="Cancel Request"
  >
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button
      type="button"
      className="btn btn-danger"
      data-bs-dismiss="modal"
      onClick={() => handleCancelRequest(subRequestId)}
    >
      Cancel Request
    </button>
  </Modal>
);

export default CancelRequestModal;
