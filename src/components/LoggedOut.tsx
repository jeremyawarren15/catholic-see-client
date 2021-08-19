import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import appPaths from '../utilities/appPaths';

function LoggedOut() {
  return (
    <>
      <Button component={NavLink} to={appPaths.register} color="inherit">Register</Button>
      <Button component={NavLink} to={appPaths.login} color="inherit">Login</Button>
    </>
  );
}

export default LoggedOut;
