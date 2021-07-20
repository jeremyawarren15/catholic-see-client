import React from 'react';

interface Props {
  id: string,
  text: string,
  title: string,
  children?: React.ReactNode // The buttons for the modal
}

const Modal = ({
  id, text, title, children,
}:Props) => (
  <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {text}
        </div>
        <div className="modal-footer">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
