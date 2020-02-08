import { DEFAULT_USER_AUTH } from 'constant/auth'
import { IUserAuth } from 'customInterfaces'
import jwtDecode from 'jwt-decode'
import React from "react"
import store from 'store'

const useAuthHandler = (initialState: IUserAuth) => {
  const [auth, setAuth] = React.useState(initialState);

  const setAuthStatus = (token: string) => {
    const { email, id, username }: { email: string, id: string, username: string } = jwtDecode(token)
    const userAuth = {
      email, id, token, username
    }
    store.set("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };

  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setAuthStatus,
    setUnauthStatus
  };
};

export default useAuthHandler;