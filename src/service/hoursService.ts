import axios from 'axios';
import { HourCardRequirements } from '../types/HourCardRequirements';

export const getHours = (token:string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/availableHours',
  {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const claimHour = (token:string, timeSlotId:number) => axios.post(
  `https://localhost:44324/api/hour/claim/${timeSlotId}`,
  null,
  {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const unclaimHour = (token:string, timeSlotId:number) => axios.post(
  `https://localhost:44324/api/hour/unclaim/${timeSlotId}`,
  null,
  {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
