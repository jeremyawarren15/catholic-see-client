import { Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Content({ children }: Props) {
  return (
    <Grid item xs={4}>
      {children}
    </Grid>
  );
}

export default Content;
