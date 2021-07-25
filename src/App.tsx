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
import urls from './utilities/urlResolver';

function App() {
  const routes = [
    {
      path: urls.available,
      exact: false,
      sidebar: <AdorationNav />,
      component: <AvailableHoursContainer />,
    },
    {
      path: urls.claimed,
      exact: false,
      sidebar: <AdorationNav />,
      component: <ClaimedHoursContainer />,
    },
    {
      path: urls.requests,
      exact: false,
      sidebar: <AdorationNav />,
      component: <HomePage />,
    },
    {
      path: urls.login,
      exact: false,
      component: <LoginPage />,
    },
    {
      path: urls.home,
      exact: true,
      component: <HomePage />,
    },
  ];

  const registerRoutes = () => routes.map((route) => {
    if (!route.sidebar) {
      return (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          <div className="container">{route.component}</div>
        </Route>
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
  });

  return (
    <>
      <UserProvider>
        <Router>
          <NavBar />
          <Switch>
            {registerRoutes()}
          </Switch>
        </Router>
        <UnclaimHourModal />
        <CancelRequestModal />
      </UserProvider>
    </>
  );
}

export default App;
