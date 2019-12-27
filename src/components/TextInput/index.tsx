import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FieldRenderProps } from "react-final-form"

type Props = FieldRenderProps<string, any>

const  TextInput : React.FC<Props> = ({ input, meta, ...rest }: Props) => {

  const error =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched
  
  const helperText = error ? meta.error || meta.submitError : undefined

  return (
    <TextField
      helperText={helperText}
      error={error}
      {...input}
      {...rest}
    />
  )
}

export default TextInput