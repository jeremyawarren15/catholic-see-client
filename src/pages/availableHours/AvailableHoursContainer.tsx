import React, { useContext, useEffect } from 'react';
import AvailableHoursPage from './AvailableHoursPage';
import UserContext from '../../contexts/UserContext';
import AvailableHoursContext from '../../contexts/AvailableHoursContext';

export const AvailableHoursContainer = () => {
  const { hours, updateHours } = useContext(AvailableHoursContext);
  const { token } = useContext(UserContext);

  useEffect(() => {
    updateHours();
  }, [token]);

  return (
    <AvailableHoursPage
      hours={hours}
    />
  );
};

export default AvailableHoursContainer;
