import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AdorationNav from './components/AdorationNav';
import ClaimedHoursContainer from './pages/claimedHours/ClaimedHoursContainer';
import UnclaimHourModal from './components/modals/UnclaimHourModal';
import CancelRequestModal from './components/modals/CancelRequestModal';
import Content from './components/Content';
import AvailableHoursContainer from './pages/availableHours/AvailableHoursContainer';
import LoginPage from './pages/login/LoginPage';
import UserProvider from './providers/UserProvider';
import HomePage from './pages/home/HomePage';
import appPaths from './utilities/appPaths';
import AuthenticatedRoute from './components/RouteAuthenticator';
import AvailableHoursProvider from './providers/AvailableHoursProvider';

function App() {
  const routes = [
    {
      path: appPaths.available,
      exact: false,
      authenticated: true,
      sidebar: <AdorationNav />,
      component: <AvailableHoursContainer />,
    },
    {
      path: appPaths.claimed,
      exact: false,
      authenticated: true,
      sidebar: <AdorationNav />,
      component: <ClaimedHoursContainer />,
    },
    {
      path: appPaths.requests,
      exact: false,
      authenticated: true,
      sidebar: <AdorationNav />,
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

  const getDefault = (route) => {
    if (route.authenticated) {
      return (
        <AuthenticatedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <div className="container">{route.component}</div>
        </AuthenticatedRoute>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <div className="container">{route.component}</div>
      </Route>
    );
  };

  const getSidebar = (route) => {
    if (route.authenticated) {
      return (
        <AuthenticatedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <BaseLayout>
            <Sidebar>
              {route.sidebar}
            </Sidebar>
            <Content>
              {route.component}
            </Content>
          </BaseLayout>
        </AuthenticatedRoute>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <BaseLayout>
          <Sidebar>
            {route.sidebar}
          </Sidebar>
          <Content>
            {route.component}
          </Content>
        </BaseLayout>
      </Route>
    );
  };

  const registerRoutes = () => routes.map((route) => {
    if (!route.sidebar) {
      return getDefault(route);
    }

    return getSidebar(route);
  });

  return (
    <>
      <UserProvider>
        <AvailableHoursProvider>
          <Router>
            <NavBar />
            <Switch>
              {registerRoutes()}
            </Switch>
          </Router>
          <UnclaimHourModal />
          <CancelRequestModal />
        </AvailableHoursProvider>
      </UserProvider>
    </>
  );
}

export default App;
