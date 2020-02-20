import { baseUrl } from 'config'
import jwtDecode from 'jwt-decode'
import store from 'store'

const attachHeaders = () => {
  return {
    // Authorization: 'Bearer '+ getToken(),
    'Content-Type': 'application/json'
  }
}

export const setToken = (token: string) => store.set('token', token)

export const getUser = () => {
  const token = store.get('token')
  if (!token) {
    return {}
  }
  return jwtDecode(token)
}
export const getToken = () =>{
  const UserAuth = JSON.parse(store.get('UserAuth'))
  console.log(UserAuth);

  const token = UserAuth.token
  console.log(token)
  if (token) {
    return token
  }
  return ''
}

export const get = async ({ path, body } : { path: string, body?: any }) => {
  const url = baseUrl + path
  const response = await fetch(url, {
    body: body ? JSON.stringify(body) : undefined,
    headers: attachHeaders()
  })
  const payload = await response.json()
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return payload
}

export const post = async ({ path, body } : { path: string, body: any }) => {
  const url = baseUrl + path
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: attachHeaders(),
    method: 'POST'
  })
  const payload = await response.json()
  if (!response.ok) {
    throw payload
  }
  return payload
}

export const apiRequest = async (
  url: string,
  method: string,
  bodyParams?: any
): Promise<any> => {
  const response = await fetch(url, {
    body: bodyParams ? JSON.stringify(bodyParams) : undefined,
    headers: attachHeaders(),
    method,
  });

  const payload = await response.json()
  if (!response.ok) {
    throw payload
  }
  return payload
};