import {
  Button,
  Typography,
} from '@material-ui/core'
import {
  LockOpen as LockOpenIcon,
} from '@material-ui/icons'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import { AuthContext } from "contexts/authContext"
import useErrorDialog from 'hooks/error-dialog'
import useLoading from 'hooks/loading'
import React from 'react'
import { Field, withTypes } from 'react-final-form'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, minLength, required } from 'services/form'
import { post } from 'services/http'

import './style.scss'

interface IForm {
  username: string,
  password: string
}
const { Form } = withTypes<IForm>()

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { setAuthStatus } = React.useContext(AuthContext)
  const [, withLoading, Loading] = useLoading(false)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const handleLogin = async ({ username, password }) => {
    const { token, error } = await withLoading(() => post({
      body: {
        password, username
      },
      path: 'user/signIn'
    })).catch((err) => err)
    if (error) {
      return showDialog(error)
    }
    history.push('/home')
    setAuthStatus(token)
  }

  return (
    <div className='login-page'>
      <Loading color="secondary" />
      <Header/>
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        LOGIN
      </Typography>
      <Form onSubmit={handleLogin}>
        {({ handleSubmit }) => 
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  validate={composeValidators(required, minLength(3))}
                  name="username"
                  label="Username"
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, minLength(5))}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<LockOpenIcon />}>
                  Login
                </Button>
              </div>
              <div>
                <Button variant="outlined" color="secondary" href="/register">
                  Register
                </Button>
              </div>
              <div>
                <Link to="/home" color="primary">
                Forgot Password? 
                </Link>
              </div>
            </div>
          </form>}
      </Form>
      <ErrorDialogComponent />
    </div>
  )
}

export default withRouter(Login)
