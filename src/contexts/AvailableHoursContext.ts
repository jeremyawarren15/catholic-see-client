/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { HourCardRequirements } from '../types/HourCardRequirements';

export type AvailableHoursContextDetails = {
  hours: HourCardRequirements[],
  updateHours: () => void
}

// UserContext contains a list of all the parishIds
// that the current user is an admin for
const UserContext = createContext<AvailableHoursContextDetails>({} as AvailableHoursContextDetails);

export default UserContext;
