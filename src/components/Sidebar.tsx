import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Sidebar({ children }: Props) {
  return (
    <div className="col-md-3">
      <div className="nav nav-pills flex-column">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
