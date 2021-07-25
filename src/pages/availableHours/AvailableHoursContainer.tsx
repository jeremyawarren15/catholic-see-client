import React, { useContext, useEffect, useState } from 'react';
import { HourCardRequirements } from '../../types/HourCardRequirements';
import AvailableHoursPage from './AvailableHoursPage';
import getHours from '../../service/hoursService';
import UserContext from '../../contexts/UserContext';

export const AvailableHoursContainer = () => {
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    getHours(token).then(({ data }) => {
      setHours(data);
    }).catch(() => {
      setHours([]);
    });
  }, [token]);

  return (
    <AvailableHoursPage
      hours={hours}
    />
  );
};

export default AvailableHoursContainer;
