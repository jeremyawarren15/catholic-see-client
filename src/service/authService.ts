import axios from 'axios';

export const login = async (email: string, password: string) => axios.post(
  'https://localhost:44324/token',
  { email, password },
  { withCredentials: true }
);

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
) => axios.post(
  'https://localhost:44324/register',
  { firstName, lastName, email, password, confirmPassword },
  { withCredentials: true }
);