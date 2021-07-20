import { createContext } from 'react';

// UserContext contains a list of all the parishIds
// that the current user is an admin for
const UserContext = createContext<number[]>([]);

export default UserContext;
