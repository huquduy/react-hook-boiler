import { DEFAULT_USER_AUTH } from 'constant/auth'
import { IUserAuth } from 'customInterfaces'
import jwtDecode from 'jwt-decode'
import React from "react"
import store from 'store'

const useAuthHandler = (initialState: IUserAuth) => {
  const [auth, setAuth] = React.useState(initialState);

  const setAuthStatus = (token: string) => {
    const { email, id, username, currency , bankName, bankAccountName, bankAccountNumber, bankId, phone}: { email: string, id: string, username: string, currency: string, bankName:string, bankAccountName: string, bankAccountNumber: string, bankId: number, phone: string } = jwtDecode(token)
    const userAuth = {
      email, id, token, username, currency, bankName, bankAccountName, bankAccountNumber, bankId, phone
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