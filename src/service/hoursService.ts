import axios, { AxiosRequestConfig } from 'axios';
import { HourCardRequirements } from '../types/HourCardRequirements';

const getRequestConfig = (token:string):AxiosRequestConfig => ({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getHours = (token:string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/availableHours',
  getRequestConfig(token),
);

export const getClaimedHours = (token:string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/claimedHours/',
  getRequestConfig(token),
);

export const claimHour = (token:string, timeSlotId:number) => axios.post(
  `https://localhost:44324/api/hour/claim/${timeSlotId}`,
  null,
  getRequestConfig(token),
);

export const unclaimHour = (token:string, timeSlotId:number) => axios.post(
  `https://localhost:44324/api/hour/unclaim/${timeSlotId}`,
  null,
  getRequestConfig(token),
);

export const createSubRequest = (
  token:string,
  timeSlotId:number,
  dateOfSubstitution:Date,
) => axios.post(
  'https://localhost:44324/api/subRequest/create',
  {
    TimeSlotId: timeSlotId,
    DateOfSubstitution: dateOfSubstitution,
  },
  getRequestConfig(token),
);

export const cancelSubRequest = (
  token:string,
  subRequestId:number,
) => axios.post(
  `https://localhost:44324/api/subRequest/cancel/${subRequestId}`,
  null,
  getRequestConfig(token),
);
