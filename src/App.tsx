import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Container, createTheme, CssBaseline, Divider, Drawer, ThemeProvider, Toolbar,
} from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors';
import { LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import NavBar from './components/NavBar';
import AdorationNav from './components/AdorationNav';
import LoginPage from './pages/LoginPage';
import UserProvider from './providers/UserProvider';
import HomePage from './pages/HomePage';
import appPaths from './utilities/appPaths';
import AuthenticatedRoute from './components/RouteAuthenticator';
import AvailableHoursPage from './pages/AvailableHoursPage';
import ClaimedHoursPage from './pages/ClaimedHoursPage';
import ResponsiveDrawerLayout from './components/layouts/ResponsiveDrawerLayout';

type RouteDefinition = {
  path: string,
  exact: boolean,
  authenticated: boolean,
  component: React.ReactNode
}

const routes:RouteDefinition[] = [
  {
    path: appPaths.available,
    exact: false,
    authenticated: true,
    component: <AvailableHoursPage />,
  },
  {
    path: appPaths.claimed,
    exact: false,
    authenticated: true,
    component: <ClaimedHoursPage />,
  },
  {
    path: appPaths.requests,
    exact: false,
    authenticated: true,
    component: <HomePage />,
  },
  {
    path: appPaths.login,
    exact: false,
    authenticated: false,
    component: <LoginPage />,
  },
  {
    path: appPaths.home,
    exact: true,
    authenticated: false,
    component: <HomePage />,
  },
];

function App() {
  const getDefault = (route:RouteDefinition) => {
    if (route.authenticated) {
      return (
        <AuthenticatedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          {route.component}
        </AuthenticatedRoute>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        {route.component}
      </Route>
    );
  };

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
        <UserProvider>
          <Router>
            <ResponsiveDrawerLayout>
              <Container>
                <Switch>
                  {routes.map((route) => getDefault(route))}
                </Switch>
              </Container>
            </ResponsiveDrawerLayout>
          </Router>
        </UserProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
