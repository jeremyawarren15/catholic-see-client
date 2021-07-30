import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function BaseLayout({ children }: Props) {
  return (
    <>
      <div className="container">
        <main role="main" className="pb-3">
          <h2>Adoration</h2>

          <div>
            <h4>St. John the Evangelist</h4>
            <hr />
            <div className="row">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default BaseLayout;
