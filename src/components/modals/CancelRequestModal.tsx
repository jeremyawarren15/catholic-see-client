import React from 'react';
import Modal from '../Modal';

type Props = {
  handleConfirmCancelRequest: () => void
}

const CancelRequestModal = ({ handleConfirmCancelRequest }:Props) => (
  <Modal
    id="cancelRequestModal"
    title="Cancel Request"
    body="Are you sure you want to cancel this substitution request?"
    buttons={(
      <>
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
          onClick={() => handleConfirmCancelRequest()}
        >
          Cancel Request
        </button>
      </>
    )}
  />
);

export default CancelRequestModal;
