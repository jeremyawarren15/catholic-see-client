import React, { ReactNode, useContext } from 'react';
import {
  AppBar, IconButton, Theme, Toolbar, Typography,
} from '@material-ui/core';
import SxProps from '@material-ui/system/styleFunctionSx/styleFunctionSx'
import MenuIcon from '@material-ui/icons/Menu';
import UserContext from '../contexts/UserContext';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

type Props = {
}

function NavBar({}:Props) {
  const { token } = useContext(UserContext);

  const renderLoginButtons = () => {
    if (!token) {
      return (<LoggedOut />);
    }

    return <LoggedIn />;
  };

  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          CatholicSee
        </Typography>
        {renderLoginButtons()}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
