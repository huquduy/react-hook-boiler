import {
  Button,
  Typography,
} from '@material-ui/core'
import {
  LockOpen as LockOpenIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import useLoading from 'components/Loading'
// import useSnackbar from 'components/Snackbar'
import TextInput from 'components/TextInput'
import React from 'react'
import { Field, withTypes } from 'react-final-form'
import { required } from 'services/form'
import { post, setToken } from 'services/http'

import './style.scss'

interface IValues {
  username: string,
  password: string
}
const { Form } = withTypes<IValues>()

function Login() {
  const [, withLoading, Loading] = useLoading(false)
  // const [showSnackbar, Snackbar] = useSnackbar()

  const handleLogin = async ({ username, password }) => {
    const { token, error } = await withLoading(() => post({
      body: {
        username, password
      },
      path: 'login'
    })).catch((err) => err)
    if (error) {
      // return showSnackbar(error)
    }
    return setToken(token)
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
                  validate={required}
                  name="username"
                  label="Username"
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={required}
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
            </div>
          </form>}
      </Form>
      <Bottom/>
      {/* <Snackbar/> */}
    </div>
  )
}

export default Login
