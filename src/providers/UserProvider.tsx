import React, { useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { refreshToken, logout } from '../service/authService';

type Props = {
  children: any
}

const UserProvider = ({ children }: Props) => {
  const [adminParishIds, setAdminParishIds] = useState<number[]>([]);
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [hasFailedRefresh, setHasFailedRefresh] = useState<boolean>(false);

  useEffect(() => {
    const refresh = async () => {
      try {
        const { data } = await refreshToken();
        const { firstName, lastName, jwtToken } = data;
        setName(firstName + ' ' + lastName);
        setToken(jwtToken);
      }
      catch (e) {
        // this can be used in routes to properly redirect to home
        setHasFailedRefresh(true);
        setToken('');
        setName('');
      }
    }

    refresh();
  }, [])

  return (
    <UserContext.Provider value={{
      name,
      token,
      adminParishIds,
      hasFailedRefresh,
      updateToken: (jwt) => setToken(jwt),
      updateAdminParishIds: (ids) => setAdminParishIds(ids),
      updateName: (userName) => setName(userName),
      logOut: () => {
        setAdminParishIds([]);
        setToken('');
        setName('');
        logout()
      },
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
