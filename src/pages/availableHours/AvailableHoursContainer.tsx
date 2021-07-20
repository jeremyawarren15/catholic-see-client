import React from 'react';
import { Route } from 'react-router-dom';
import { HourCardRequirements } from '../../types/HourCardRequirements';
import AvailableHoursPage from './AvailableHoursPage';

export const AvailableHoursContainer = () => {
  const allHours:HourCardRequirements[] = [
    {
      day: 0,
      hour: 1,
      parishId: 1,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
    {
      day: 1,
      hour: 1,
      parishId: 11,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
    {
      day: 2,
      hour: 1,
      parishId: 11,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
    {
      day: 5,
      hour: 15,
      parishId: 11,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
    {
      day: 5,
      hour: 11,
      parishId: 11,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 2,
    },
    {
      day: 5,
      hour: 12,
      parishId: 2,
      isClaimedByUser: false,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
  ];

  return (
    <Route exact path="/available">
      <AvailableHoursPage
        hours={allHours}
      />
    </Route>
  );
};

export default AvailableHoursContainer;
