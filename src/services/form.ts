export const required = value => (value ? undefined : 'Required')

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minLength = length => str => str.length > length ? undefined : `Must be more than ${length} characters`

export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
  
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)