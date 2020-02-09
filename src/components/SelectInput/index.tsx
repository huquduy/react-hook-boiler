import {
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import React, { useState } from 'react'
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
  const [openGameSelector, setOpenGameSelector] = useState(false)
  const handleCloseGameSelector = () => {
    setOpenGameSelector(false)
  }

  const handleOpenGameSelector = () => {
    setOpenGameSelector(true)
  }
  const error =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched

  return (
    <div className="select-input-custom">
      <InputLabel shrink={true} color={error ? "secondary" : "primary"}>
        {label}
      </InputLabel>
      <Select
        color={error ? "secondary" : "primary"}
        open={openGameSelector}
        onClose={handleCloseGameSelector}
        onOpen={handleOpenGameSelector}
        {...input}
        {...rest}
      >
        {options.map(({title, value}) => <MenuItem key={value} value={value}>{title}</MenuItem>)}
      </Select>
      {error && (
        <p className="MuiFormHelperText-root Mui-error">{meta.error}</p>
      )}
    </div>
  )
}

export default SelectInput