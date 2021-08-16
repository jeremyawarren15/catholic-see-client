import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function LoggedOut() {
  return (
    <>
      <Button color="inherit">Register</Button>
      <Button component={NavLink} to="/login" color="inherit">Login</Button>
    </>
  );
}

export default LoggedOut;
