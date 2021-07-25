import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import UserContext from '../contexts/UserContext';
import appPaths from '../utilities/appPaths';

const AuthenticatedRoute = ({ children, ...other }: RouteProps) => {
  const { token } = useContext(UserContext);
  if (token) {
    return (
      <Route
        {...other}
      >
        {children}
      </Route>
    );
  }

  return (<Redirect to={appPaths.home} />);
};

export default AuthenticatedRoute;
