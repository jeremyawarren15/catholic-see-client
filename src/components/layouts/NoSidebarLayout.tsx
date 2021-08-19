import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import LoggedOut from '../LoggedOut';

function NoSidebarLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            CatholicSee
          </Typography>
          <LoggedOut />
        </Toolbar>
      </AppBar>
      <Container>
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}

export default NoSidebarLayout;
