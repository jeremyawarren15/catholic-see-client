import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import AdorationNav from '../AdorationNav';
import LoggedOut from '../LoggedOut';

function NoSidebarLayout({ children }) {
  const container = window !== undefined ? () => window.document.body : undefined;

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
