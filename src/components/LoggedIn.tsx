import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function LoggedIn() {
  const { name, logOut } = useContext(UserContext);
  return (
    <>
      <Button color="inherit">{name}</Button>
      <Button color="inherit" onClick={() => logOut()}>Logout</Button>
    </>
  );
}

export default LoggedIn;
