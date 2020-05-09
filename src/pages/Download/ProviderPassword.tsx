import { Button, Typography } from '@material-ui/core'
import {
  Send as SendIcon,
} from '@material-ui/icons'
import TextInput from 'components/TextInput'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import React, { useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { compareWithField, required } from 'services/form'
import { post } from 'services/http'

interface IForm {
  username: string,
  password: string,
  confirmPassword: string,
}
const { Form } = withTypes<IForm>()

const ProviderPassword = ({ url, username, passwordDescription, isShown }) => {
  const [, withLoading] = useLoading(false)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const handleUpdatePassword = async ({ password }) => {
    const { error } = await withLoading(() => post({
      body: {
        password
      },
      path: url
    })).catch(err => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    return showDialog('Updated Succesfully', 'Success')
  }

  return (
    <div className="form-password">
      {isShown ? 
        <div className="form-password">
          <Form
            initialValues={{
              confirmPassword: '',
              password: '',
              username
            }}
            onSubmit={handleUpdatePassword}
          >
            {({ handleSubmit }) =>
              <form onSubmit={handleSubmit}>
                <div className='container'>
                  <Field
                    name="username"
                    label="Username :"
                    type="text"
                    fullWidth={true}
                    component={TextInput}
                    disabled={true}
                  />
                  <Field
                    validate={required}
                    name="password"
                    label="Password: "
                    type="password"
                    fullWidth={true}
                    component={TextInput}
                  />
                  <Typography color="primary" variant="caption" display="block" gutterBottom={true}>
                    {passwordDescription}
                  </Typography>
                  <Field
                    validate={compareWithField('password')}
                    name="confirmPassword"
                    label="Memastikan Password :"
                    type="password"
                    fullWidth={true}
                    component={TextInput}
                  />
                  <div>
                    <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                      Submit
                    </Button>
                  </div>
                </div>
              </form>}
          </Form>
          <ErrorDialogComponent />
        </div> :
        <Typography color="primary" variant="caption" display="block" gutterBottom={true}>
          Username: {username}
        </Typography>}
    </div>
	
  )
}

export default ProviderPassword