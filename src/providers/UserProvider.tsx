import React, { useState } from 'react';
import UserContext from '../UserContext';

type Props = {
  children: any
}

const UserProvider = ({ children }:Props) => {
  const [adminParishIds, setAdminParishIds] = useState<number[]>([]);
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');

  return (
    <UserContext.Provider value={{
      name,
      token,
      adminParishIds,
      updateToken: (jwt) => setToken(jwt),
      updateAdminParishIds: (ids) => setAdminParishIds(ids),
      updateName: (userName) => setName(userName),
      logOut: () => {
        setAdminParishIds([]);
        setToken('');
        setName('');
      },
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
