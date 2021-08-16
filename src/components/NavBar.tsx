import React, { useContext } from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import appPaths from '../utilities/appPaths';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function NavBar() {
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
          onClick={() => handleDrawerOpen()}
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
