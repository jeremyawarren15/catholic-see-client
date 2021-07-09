import React from 'react';
import { HourCardRequirements } from '../../types/HourCardRequirements';
import AvailableHoursPage from './AvailableHoursPage';

export const AvailableHoursContainer = () => {
  const x:HourCardRequirements[] = [
    {
      day: 0,
      hour: 1,
      isAdmin: true,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
    {
      day: 1,
      hour: 1,
      isAdmin: true,
      isClaimedByUser: true,
      location: 'Sacred Heart Chapel',
      minimumAdorers: 2,
      numberOfAdorers: 1,
    },
  ];

  return (
    <AvailableHoursPage sunday={x} />
  );
};

export default AvailableHoursContainer;
