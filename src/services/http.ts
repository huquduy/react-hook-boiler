import { baseUrl } from 'config'
import { stringify } from 'query-string';
import store from 'store'

const attachHeaders = () => {
  return {
    Authorization: store.get('token'),
    'Content-Type': 'application/json'
  }
}

export const setToken = (token: string) => store.set('token', token)

export const get = async (path: string, body: any) => {
  const url = baseUrl + path + '?' + stringify(body)
  const response = await fetch(url, {
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
    method: 'POST'
  })
  const payload = await response.json()
  if (!response.ok) {
    throw payload
  }
  return payload
}