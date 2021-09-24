import axios, { AxiosRequestConfig } from 'axios';
import { AccountSettings } from '../types/AccountSettings';

const getRequestConfig = (token: string): AxiosRequestConfig => ({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getUserSettings = (token: string) => axios.get<AccountSettings>(
  'https://localhost:44324/api/account/',
  getRequestConfig(token),
);