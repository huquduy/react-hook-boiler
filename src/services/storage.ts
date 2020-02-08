import { DEFAULT_USER_AUTH } from 'constant/auth'
import { IUserAuth } from 'customInterfaces'
import store from 'store'

export const getStoredUserAuth = (): IUserAuth => {
  const auth = store.get('UserAuth')
  if (auth) {
    return JSON.parse(auth)
  }
  return DEFAULT_USER_AUTH
}