import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  id: string
}

const Accordion = ({ children, id }: Props) => (
  <div id={id}>
    {children}
  </div>
);

export default Accordion;
