import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Container, createTheme, CssBaseline, ThemeProvider,
} from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors';
import { LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LoginPage from './pages/LoginPage';
import UserProvider from './providers/UserProvider';
import HomePage from './pages/HomePage';
import appPaths from './utilities/appPaths';
import AuthenticatedRoute from './components/RouteAuthenticator';
import AvailableHoursPage from './pages/AvailableHoursPage';
import ClaimedHoursPage from './pages/ClaimedHoursPage';
import ResponsiveDrawerLayout from './components/layouts/ResponsiveDrawerLayout';
import NoSidebarLayout from './components/layouts/NoSidebarLayout';
import SignUpPage from './pages/SignUpPage';

type RouteDefinition = {
  path: string,
  exact: boolean,
  authenticated: boolean,
  sidebar: boolean,
  component: React.ReactNode
}

const routes:RouteDefinition[] = [
  {
    path: appPaths.available,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: <AvailableHoursPage />,
  },
  {
    path: appPaths.claimed,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: <ClaimedHoursPage />,
  },
  {
    path: appPaths.requests,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: <HomePage />,
  },
  {
    path: appPaths.login,
    exact: false,
    authenticated: false,
    sidebar: false,
    component: <LoginPage />,
  },
  {
    path: '/register',
    exact: false,
    authenticated: false,
    sidebar: false,
    component: <SignUpPage />,
  },
  {
    path: appPaths.home,
    exact: true,
    authenticated: false,
    sidebar: false,
    component: <HomePage />,
  },
];

function App() {
  const getRouteComponent = (authenticationRequired:boolean) => {
    if (authenticationRequired) {
      return AuthenticatedRoute;
    }

    return Route;
  };

  const getLayoutComponent = (hasSidebar:boolean) => {
    if (hasSidebar) {
      return ResponsiveDrawerLayout;
    }

    return NoSidebarLayout;
  };

  const getRoute = (route:RouteDefinition) => {
    const RouteComponent = getRouteComponent(route.authenticated);
    const LayoutComponent = getLayoutComponent(route.sidebar);
    return (
      <RouteComponent
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <LayoutComponent>
          <Container>
            {route.component}
          </Container>
        </LayoutComponent>
      </RouteComponent>
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
            <Switch>
              {routes.map((route) => getRoute(route))}
            </Switch>
          </Router>
        </UserProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
