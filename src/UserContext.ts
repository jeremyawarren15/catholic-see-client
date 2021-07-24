/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type UserContextDetails = {
  token: string,
  name: string,
  adminParishIds: number[],
  updateToken: (token:string) => void,
  updateAdminParishIds: (ids: number[]) => void
  updateName: (name: string) => void,
  logOut: () => void
}

// UserContext contains a list of all the parishIds
// that the current user is an admin for
const UserContext = createContext<UserContextDetails>({} as UserContextDetails);

export default UserContext;
