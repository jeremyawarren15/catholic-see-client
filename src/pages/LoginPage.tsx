import {
  Avatar,
  Box,
  Button, Container, TextField, Typography,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import login from '../service/authService';
import appPaths from '../utilities/appPaths';

const LoginPage = () => {
  const { updateToken, updateAdminParishIds, updateName } = useContext(UserContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async () => {
    login(emailAddress, password)
      .then(({ data }) => {
        updateAdminParishIds(data.parishAdminAccessIds);
        updateToken(data.access_Token);
        updateName(data.name);
        history.push(appPaths.claimed);
      });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
