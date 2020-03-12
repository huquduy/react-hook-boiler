import { baseUrl } from 'config'
import jwtDecode from 'jwt-decode'
import store from 'store'

const attachHeaders = () => {
  return {
    'Authorization': 'Bearer ' + getToken() ,
    'Content-Type': 'application/json'
    }
}

const handleErrors = response => {
  if ([200, 201].includes(response.status)) {
    return response
  }
  if (response.status === 401) {
    store.clearAll()
    window.location.href = 'login'
  }
  
  throw response
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
  const responseHandledError = handleErrors(response)
  const payload = await responseHandledError.json()
  if (!responseHandledError.ok) {
    throw payload
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