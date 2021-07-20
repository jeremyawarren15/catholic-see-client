import React from 'react';
import { Route } from 'react-router-dom';
import ClaimedHoursPage from './ClaimedHoursPage';

const ClaimedHoursContainer = () => (
  <Route exact path="/">
    <ClaimedHoursPage />
  </Route>
);

export default ClaimedHoursContainer;
