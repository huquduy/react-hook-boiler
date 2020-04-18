import {
    InputLabel,
    TextField
} from '@material-ui/core'
import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import './style.scss'

export interface ICheckbox {
    value: any,
    title: string
}

type CheckboxInputProps = FieldRenderProps<string, any>

interface ICheckboxInput extends CheckboxInputProps {
    label: string;
    handleChange?: any
}

const Checkbox: React.FC<ICheckboxInput> = ({ input, meta, label, handleChange, ...rest }: ICheckboxInput) => {
    const error =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched

    const callbackOnChange = e => {
        input.onChange(e)
        if (handleChange) {
            handleChange(e)
        }
    }

    return (
        <div className="checkbox-input-custom squaredcheck">
            <TextField
                error={error}
                {...input}
                {...rest}
                onChange={callbackOnChange}
            />
             <InputLabel shrink={true} color={error ? 'secondary' : 'primary'}>
                {label}
            </InputLabel>
            {error && (
                <p className="MuiFormHelperText-root Mui-error">{meta.error}</p>
            )}
        </div>
    )
}

export default Checkbox