import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AdorationNav from './components/AdorationNav';
import UserContext from './UserContext';
import ClaimedHoursContainer from './pages/claimedHours/ClaimedHoursContainer';
import UnclaimHourModal from './components/modals/UnclaimHourModal';
import CancelRequestModal from './components/modals/CancelRequestModal';
import Content from './components/Content';
import AvailableHoursContainer from './pages/availableHours/AvailableHoursContainer';

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      sidebar: <AdorationNav />,
      component: <ClaimedHoursContainer />,
    },
    {
      path: '/available',
      exact: true,
      sidebar: <AdorationNav />,
      component: <AvailableHoursContainer />,
    },
    {
      path: '/login',
      exact: true,
      component: <div>Test</div>,
    },
  ];

  const registerRoutes = () => routes.map((route) => {
    if (!route.sidebar) return (<div className="container">{route.component}</div>);

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
      <Router>
        <UserContext.Provider value={[1, 2, 3]}>
          <NavBar />
          <Switch>
            {registerRoutes()}
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
      <UnclaimHourModal />
      <CancelRequestModal />
    </>
  );
}

export default App;
