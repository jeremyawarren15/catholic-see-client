import axios, { AxiosRequestConfig } from 'axios';
import { HourCardRequirements } from '../types/HourCardRequirements';
import { SubRequestCardRequirements } from '../types/SubRequestCardRequirements';
import { SubRequestListItem } from '../types/SubRequestListItem';

const getRequestConfig = (token: string): AxiosRequestConfig => ({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getHours = (token: string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/availableHours',
  getRequestConfig(token),
);

export const getClaimedHours = (token: string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/claimedHours/',
  getRequestConfig(token),
);

export const getSubRequests = (token: string) => axios.get<SubRequestCardRequirements[]>(
  'https://localhost:44324/api/subRequests/',
  getRequestConfig(token)
)

export const getPersonalSubRequests = (token: string) => axios.get<SubRequestListItem[]>(
  'https://localhost:44324/api/subRequests/personal',
  getRequestConfig(token)
)

export const getClaimedSubRequests = (token: string) => axios.get<SubRequestListItem[]>(
  'https://localhost:44324/api/subRequests/claimed',
  getRequestConfig(token)
)

export const pickUpSubRequest = (token: string, subRequestId: number) => axios.post(
  `https://localhost:44324/api/subRequest/pickUp/${subRequestId}`,
  null,
  getRequestConfig(token),
);

export const claimHour = (token: string, timeSlotId: number) => axios.post(
  `https://localhost:44324/api/hour/claim/${timeSlotId}`,
  null,
  getRequestConfig(token),
);

export const unclaimHour = (token: string, timeSlotId: number) => axios.post(
  `https://localhost:44324/api/hour/unclaim/${timeSlotId}`,
  null,
  getRequestConfig(token),
);

export const createSubRequest = (
  token: string,
  timeSlotId: number,
  dateOfSubstitution: Date,
) => axios.post(
  'https://localhost:44324/api/subRequest/create',
  {
    TimeSlotId: timeSlotId,
    DateOfSubstitution: dateOfSubstitution,
  },
  getRequestConfig(token),
);

export const cancelSubRequest = (
  token: string,
  subRequestId: number,
) => axios.post(
  `https://localhost:44324/api/subRequest/cancel/${subRequestId}`,
  null,
  getRequestConfig(token),
);
