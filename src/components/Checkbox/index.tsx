import TextField from '@material-ui/core/TextField'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import React from 'react'
import { FieldRenderProps } from "react-final-form"

type Props = FieldRenderProps<string, any>

const  CheckboxInput : React.FC<CheckboxProps> = ({ inputRef, ...rest }: CheckboxProps) => {

  // const error =
  //   ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
  //   meta.touched
  
  // const helperText = error ? meta.error || meta.submitError : undefined

  return (
    <Checkbox
      className='checkbox-input-custom'
      // helperText={helperText}
      // error={error}
      {...inputRef}
      {...rest}
    />
  )
}

export default CheckboxInput