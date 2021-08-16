import { Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Sidebar({ children }: Props) {
  return (
    { children }
  );
}

export default Sidebar;
