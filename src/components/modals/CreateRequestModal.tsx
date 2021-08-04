import React, { useState } from 'react';
import Modal from '../Modal';

type Props = {
  handleConfirmCreateRequest: () => void
}

const CreateRequestModal = ({ handleConfirmCreateRequest }:Props) => {
  const [subDate, setSubDate] = useState('');

  const handleChange = (e) => {
    setSubDate(e.target.value);
  };

  return (
    <Modal
      id="createSubRequestModal"
      title="Make Sub Request"
      body={(
        <div>
          <label htmlFor="subRequestDate" className="form-label">Date of Substitution Request</label>
          <select
            id="subRequestDate"
            className="form-select form-control"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option value="1">1/1/2021</option>
            <option value="2">1/8/2021</option>
            <option value="3">1/15/2021</option>
          </select>
        </div>
  )}
      buttons={(
        <>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleConfirmCreateRequest()}>Unclaim</button>
        </>
  )}
    />
  );
};

export default CreateRequestModal;
