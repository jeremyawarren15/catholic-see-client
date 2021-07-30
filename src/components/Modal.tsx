import React from 'react';

interface Props {
  id: string,
  title: string,
  body?: React.ReactNode,
  buttons?: React.ReactNode
}

const Modal = ({
  id, title, body, buttons,
}:Props) => (
  <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {body}
        </div>
        <div className="modal-footer">
          {buttons}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
