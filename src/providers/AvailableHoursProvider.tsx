import React, { useContext, useState } from 'react';
import AvailableHoursContext from '../contexts/AvailableHoursContext';
import UserContext from '../contexts/UserContext';
import getHours from '../service/hoursService';
import { HourCardRequirements } from '../types/HourCardRequirements';

type Props = {
  children: any
}

const AvailableHoursProvider = ({ children }:Props) => {
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const { token } = useContext(UserContext);

  const updateHours = () => {
    getHours(token).then(({ data }) => {
      setHours(data);
    });
  };

  return (
    <AvailableHoursContext.Provider value={{
      hours,
      updateHours,
    }}
    >
      {children}
    </AvailableHoursContext.Provider>
  );
};

export default AvailableHoursProvider;
