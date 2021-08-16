import React, { ReactNode } from 'react';
import { Container, Typography } from '@material-ui/core';

interface Props {
  children?: ReactNode
}

function BaseLayout({ children }: Props) {
  return (
    <Container>
      <Typography variant="h3">Adoration</Typography>
      <Typography variant="h5">St. John the Evangelist</Typography>
      <hr />
      {children}
    </Container>
  );
}

export default BaseLayout;
