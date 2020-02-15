import {
  InputLabel,
  NativeSelect,
} from '@material-ui/core'
import React from 'react'
import { FieldRenderProps } from "react-final-form"
import './style.scss'

export interface IOption {
  value: any,
  title: string
}

type SelectInputProps = FieldRenderProps<string, any>

interface ISelectInput extends SelectInputProps {
  label: string;
  options: IOption[]
}

const SelectInput: React.FC<ISelectInput> = ({ input, meta, label, options, ...rest }: ISelectInput) => {
  const error =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched

  return (
    <div className="select-input-custom">
      <InputLabel shrink={true} color={error ? "secondary" : "primary"}>
        {label}
      </InputLabel>
      <NativeSelect
        color={error ? "secondary" : "primary"}
        {...input}
        {...rest}
      >
        {options.map(({title, value}) => <option key={value} value={value}>{title}</option>)}
      </NativeSelect>
      {error && (
        <p className="MuiFormHelperText-root Mui-error">{meta.error}</p>
      )}
    </div>
  )
}

export default SelectInput