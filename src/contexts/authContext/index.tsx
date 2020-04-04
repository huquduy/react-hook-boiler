import { DEFAULT_USER_AUTH } from 'constant/auth'
import { IUserAuth } from 'customInterfaces'
import useAuthHandler from 'hooks/authHandler'
import React, { createContext, FC, ReactNode } from 'react'
import { getStoredUserAuth } from 'services/storage'

interface IAuthContextInterface {
  auth: IUserAuth;
  setAuthStatus: (token: string) => void;
  setUnauthStatus: () => void;
}

export const AuthContext = createContext<IAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: (): void => {},
  setUnauthStatus: (): void => {}
});

const AuthProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider