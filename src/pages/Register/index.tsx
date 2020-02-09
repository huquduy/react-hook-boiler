import {
  Button,
  Link as LinkMUI,
  Typography,
} from '@material-ui/core'
import {
  LockOpen as LockOpenIcon,
} from '@material-ui/icons'
import Header from 'components/Header'
import SelectInput, { IOption } from 'components/SelectInput'
import TextInput from 'components/TextInput'
import { AuthContext } from "contexts/authContext"
import useLoading from 'hooks/loading'
import useSnackbar from 'hooks/snackbar'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, minLength, required } from 'services/form'
import { get, post } from 'services/http'

import './style.scss'

interface IForm {
  email: string,
  bankName: string,
  username: string,
  password: string
}
const { Form } = withTypes<IForm>()

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [initialValues, setInitialValues] = useState<IForm>({
    bankName: '3',
    email: '',
    password: '',
    username: 'asda',
  })
  const [banks, setBanks] = useState<IOption[] | []>([])

  const { setAuthStatus } = React.useContext(AuthContext)
  const [, withLoading, Loading] = useLoading(false)
  const [showSnackbar, Snackbar] = useSnackbar(false)

  const handleLogin = async ({ username, password }) => {
    const { token, error } = await withLoading(() => post({
      body: {
        password, username
      },
      path: 'user/signIn'
    })).catch((err) => err)
    if (error) {
      return showSnackbar(error)
    }
    history.push('/home')
    setAuthStatus(token)
  }

  const fetchBanks = async () => {
    const correctBankProps = ({ bankName, id }) => ({
      title: bankName,
      value: String(id),
    })
    const { data } : { data: any[] } = await withLoading(() => get({
      path: 'banking'
    }))
      .catch((err) => err)

    setBanks(map(correctBankProps, data))

    const initialBank = data[0].id
    setInitialValues({
      ...initialValues,
      bankName: String(initialBank)
    })
  }

  useEffect(() => {
    fetchBanks()
  }, [])

  return (
    <div className='login-page'>
      <Loading color="secondary" />
      <Header/>
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        REGISTER
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleLogin}>
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
                  validate={composeValidators(required, minLength(3))}
                  name="email"
                  label="Email"
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
                <Field
                  validate={required}
                  name="bankname"
                  label="Bankname"
                  fullWidth={true}
                  options={banks}
                  component={SelectInput} />
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
                <Link to="/home">
                  <LinkMUI color="primary">
                    Forgot Password? 
                  </LinkMUI>
                </Link>
              </div>
            </div>
          </form>}
      </Form>
      <Snackbar/>
    </div>
  )
}

export default withRouter(Login)
