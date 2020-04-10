import { baseUrl } from 'config'
import jwtDecode from 'jwt-decode'
import store from 'store'

const attachHeaders = () => {
  return {
    'Authorization': `Bearer ${  getToken()}`,
    'Content-Type': 'application/json'
  }
}

const handleErrors = async response => {
  if ([200, 201].includes(response.status)) {
    return response.json()
  }
  if (response.status === 401) {
    store.clearAll()
    window.location.href = 'login'
  }
  
  const error = await response.json()
  throw error
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
  const checkStore = store.get('UserAuth');
  if(!checkStore){
    return ''
  }
  const UserAuth = JSON.parse(checkStore)
  return UserAuth.token
}

export const get = async ({ path, body } : { path: string, body?: any }) => {
  const url = baseUrl + path
  const queryString = body ? new URLSearchParams(body) : ''
  const response = await fetch(`${url}?${queryString}`, {
    headers: attachHeaders()
  })
  const responseHandledError = await handleErrors(response)
  return responseHandledError
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
export const put = async ({ path, body } : { path: string, body: any }) => {
  const url = baseUrl + path
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: attachHeaders(),
    method: 'PUT'
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