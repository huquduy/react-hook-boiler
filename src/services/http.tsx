/* eslint-disable no-restricted-globals */
import store from 'store'
import queryString from 'query-string'
import React from 'react'

const BASE_URL = 'https://reqres.in/api/'
const SUCCESS_STATUS = [200, 201]

interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export const get = async <T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
 
export const post = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "post", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};
 
export const put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};