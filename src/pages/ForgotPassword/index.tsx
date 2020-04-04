import {
  Button,
  Typography,
} from '@material-ui/core'
import {
  LockOpen as LockOpenIcon,
} from '@material-ui/icons'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import useErrorDialog from 'hooks/error-dialog'
import useLoading from 'hooks/loading'
import React from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {  isEmail } from 'services/form'
import { post } from 'services/http'

import './style.scss'

interface IForm {
  email: string
}
const { Form } = withTypes<IForm>()

const ForgotPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [, withLoading, Loading] = useLoading(false)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const handleForgotPassword = async ({ email }) => {
    const {  error } = await withLoading(() => post({
      body: {
        email
      },
      path: 'user/forgot'
    })).catch((err) => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    history.push('/home')
  }

  return (
    <div className='login-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        RESET PASSWORD
      </Typography>
      <Form onSubmit={handleForgotPassword}>
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  validate={isEmail}
                  name="email"
                  label="Email"
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Typography color="primary" align="left" gutterBottom={true}>
                  Your reset pasword link will be sent to your registered email adress
                </Typography>
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit">
                  Submit
                </Button>
              </div>
              <div>
                <Button variant="outlined" className="success" href="/login" startIcon={<LockOpenIcon />}>
                  Back to Login
                </Button>
              </div>
            </div>
          </form>}
      </Form>
      <ErrorDialogComponent />
    </div>
  )
}

export default withRouter(ForgotPassword)
