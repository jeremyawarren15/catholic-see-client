import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Container, Divider, Drawer, Toolbar,
} from '@material-ui/core';
import NavBar from './components/NavBar';
import AdorationNav from './components/AdorationNav';
import LoginPage from './pages/LoginPage';
import UserProvider from './providers/UserProvider';
import HomePage from './pages/HomePage';
import appPaths from './utilities/appPaths';
import AuthenticatedRoute from './components/RouteAuthenticator';
import AvailableHoursPage from './pages/AvailableHoursPage';
import ClaimedHoursPage from './pages/ClaimedHoursPage';
import CancelRequestDialog from './components/dialogs/CancelRequestDialog';
import DialogManager from './components/DialogManager';
import DialogProvider from './providers/DialogProvider';

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

  return (
    <>
      <UserProvider>
        <DialogProvider>
          <Router>
            <NavBar />
            <Drawer
              anchor="left"
              variant="permanent"
              sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: 240,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Toolbar />
              <Divider />
              <AdorationNav />
            </Drawer>
            <Container sx={{ marginTop: 11 }}>
              <Switch>
                {routes.map((route) => getDefault(route))}
              </Switch>
            </Container>
          </Router>
          <DialogManager />
        </DialogProvider>
      </UserProvider>
    </>
  );
}

export default App;
