import TextField from '@material-ui/core/TextField'
import React from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string, any>

const  TextInput : React.FC<Props> = ({ input, meta, ...rest }: Props) => {

  const error =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched
  
  const helperText = error ? meta.error || meta.submitError : undefined
  const callbackOnChange = (e:any) => {
    if(rest[`lowercase`] && rest[`lowercase`] === 'true'){
      input.onChange(e.target.value.toLowerCase())
    }else {
      input.onChange(e)
    } 
  }

  return (
    <TextField
      className='text-input-custom'
      variant="outlined"
      helperText={helperText}
      error={error}
      {...input}
      {...rest}
      onChange={callbackOnChange}
    />
  )
}

export default TextInput