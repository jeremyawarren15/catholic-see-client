import { CircularProgress, Container } from '@material-ui/core';
import React, { Suspense, useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../contexts/UserContext';
import { RouteDefinition } from '../types/RouteDefinition';
import appPaths from '../utilities/appPaths';
import { appRoutes } from '../utilities/appRoutes';
import NoSidebarLayout from './layouts/NoSidebarLayout';
import ResponsiveDrawerLayout from './layouts/ResponsiveDrawerLayout';

const RouteBuilder = () => {
  const { token, hasFailedRefresh } = useContext(UserContext);

  const getLayoutComponent = (hasSidebar: boolean) => {
    if (hasSidebar) {
      return ResponsiveDrawerLayout;
    }

    return NoSidebarLayout;
  };

  const getRoute = (route: RouteDefinition) => {
    const LayoutComponent = getLayoutComponent(route.sidebar);
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
      >
        <LayoutComponent>
          <Container>
            <Suspense fallback={<CircularProgress />}>
              <route.component />
            </Suspense>
          </Container>
        </LayoutComponent>
      </Route>
    );
  };


  return (
    <>
      {(!token && hasFailedRefresh) && <Redirect to={appPaths.home} />} // only redirect if not able to authenticate
      {appRoutes.map((route) => getRoute(route))}
    </>
  );
}

export default RouteBuilder;