import {
  Button, TextField, Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import login from '../service/authService';
import appPaths from '../utilities/appPaths';

const LoginPage = () => {
  const { updateToken, updateAdminParishIds, updateName } = useContext(UserContext);
  const [showLoadingButton, setShowLoadingButton] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async () => {
    setShowLoadingButton(true);
    await login(emailAddress, password)
      .then(({ data }) => {
        updateAdminParishIds(data.parishAdminAccessIds);
        updateToken(data.access_Token);
        updateName(data.name);
        history.push(appPaths.claimed);
      }).catch(() => {
        setShowLoadingButton(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const renderSubmitButton = () => {
    if (showLoadingButton) {
      return (
        <Button variant="contained" disabled>Loading...</Button>
      );
    }

    return (
      <Button type="submit" variant="contained">Submit</Button>
    );
  };

  return (
    <>
      <Typography variant="h3" style={{ marginBottom: '10px' }}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {renderSubmitButton()}
      </form>
    </>
  );
};

export default LoginPage;
