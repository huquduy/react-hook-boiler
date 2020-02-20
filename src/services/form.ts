/* eslint-disable no-useless-escape */
export const required = value => (value ? undefined : 'Required')

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minLength = length => str => str.length > length ? undefined : `Must be more than ${length} characters`

export const maxLength = length => str => str.length < length ? undefined : `Must be less than ${length} characters`

export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`

export const compareWithField = field => (value, values) => value === values[field] ? undefined : 'Re-check your password'

export const isEmail = value => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? undefined : 'You have entered an invalid email address'
  
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)