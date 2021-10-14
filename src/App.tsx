import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  createTheme, CssBaseline, ThemeProvider,
} from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors';
import { LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import UserProvider from './providers/UserProvider';
import RouteBuilder from './components/RouteBuilder';

function App() {
  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: pink,
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Switch>
            <UserProvider>
              <RouteBuilder />
            </UserProvider>
          </Switch>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
