import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Content({ children }: Props) {
  return (
    <div className="col-md-9">
      {children}
    </div>
  );
}

export default Content;
