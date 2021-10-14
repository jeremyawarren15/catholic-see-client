import axios from 'axios';

type RefreshTokenType = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  jwtToken: string
}

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

export const logout = () => axios.post(
  'https://localhost:44324/revoke-token',
  null,
  { withCredentials: true }
)

export const refreshToken = () => axios.post<RefreshTokenType>(
  'https://localhost:44324/refresh-token',
  null,
  { withCredentials: true }
)