import {
  Button,
  Typography
} from '@material-ui/core'
import {
  Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compareWithField, composeValidators, minLength, required } from 'services/form'
import { put } from 'services/http'
import './style.scss'

interface IForm {
  password: string,
  bankName: string,
  currency: string,
  email: string,
  phone: string,
  bankAccountName: string,
  bankAccountNumber: string,
  new_password: string,
  password_confirmation: string,
  username: string

}
const { Form } = withTypes<IForm>()

const Profile: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [initialValues] = useState<IForm>({
    bankAccountName: auth.bankAccountName,
    bankAccountNumber: auth.bankAccountNumber,
    bankName: auth.bankName,
    currency: auth.currency,
    email: auth.email,
    phone: auth.phone,
    password: '',
    new_password: '',
    password_confirmation: '',
    username: auth.username

  })
  const [isLoading, withLoading, Loading] = useLoading(false)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const handleChangePassword = async ({ password, new_password, password_confirmation, }) => {
    const { error } = await withLoading(() => put({
      body: {
        new_password, password, password_confirmation
      },
      path: 'user/password'
    })).catch((err) => err)
    if (error) {
      return showDialog(error.validate, 'Error')
    }
    showDialog('Updated Successfully', 'Success')
  }
  useEffect(() => { }, [])
  return (
    <div className='profile-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        PROFILE
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleChangePassword}
      >
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  name="username"
                  label="Referal Id"
                  type="text"
                  fullWidth={true}
                  disabled={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="email"
                  label="Email"
                  type="text"
                  fullWidth={true}
                  disabled={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="phone"
                  label="Phone"
                  type="text"
                  fullWidth={true}
                  disabled={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="bankName"
                  label="From Bank :"
                  type="text"
                  fullWidth={true}
                  disabled={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="bankAccountName"
                  label="Bank Account Name: "
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="bankAccountNumber"
                  label="Bank Account No :"
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="currency"
                  label="Currency"
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  validate={composeValidators(required)}
                  name="password"
                  label="Old Password :"
                  type="password"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, minLength(5))}
                  name="new_password"
                  label="New Password :"
                  type="password"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  validate={compareWithField('new_password')}
                  name="password_confirmation"
                  label="Confirm Password :"
                  type="password"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                  Submit
                </Button>
              </div>
            </div>
          </form>}
      </Form>
      <ErrorDialogComponent />
      <Bottom />
    </div>

  )
}

export default withRouter(Profile)
