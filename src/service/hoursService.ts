import axios from 'axios';
import { HourCardRequirements } from '../types/HourCardRequirements';

const getHours = async (token:string) => axios.get<HourCardRequirements[]>(
  'https://localhost:44324/api/availableHours',
  {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export default getHours;
