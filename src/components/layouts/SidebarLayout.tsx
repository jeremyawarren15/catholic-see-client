import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import BaseLayout from './BaseLayout';

interface Props {
  sidebar?: ReactNode,
  children?: ReactNode
}

function SidebarLayout({ sidebar, children }: Props) {
  return (
    <BaseLayout>
      <Grid container>
        <Grid item xs={6}>
          {sidebar}
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </BaseLayout>
  );
}

export default SidebarLayout;
