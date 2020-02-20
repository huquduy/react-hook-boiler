import {
  Button,
  Link as LinkMUI,
  Typography,
} from '@material-ui/core'
import {
  Add as AddIcon,
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
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compareWithField, composeValidators, isEmail, maxLength, minLength, required } from 'services/form'
import { get, post } from 'services/http'

import './style.scss'

interface IForm {
  email: string,
  bankId: string,
  bankAccountName: string,
  bankAccountNumber: string,
  username: string,
  password: string,
  phone: string,
}
const { Form } = withTypes<IForm>()

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [initialValues, setInitialValues] = useState<IForm>({
    bankAccountName: '',
    bankAccountNumber: '',
    bankId: '',
    email: '',
    password: '',
    phone: '',
    username: '',
  })
  const [banks, setBanks] = useState<IOption[] | []>([])

  const { setAuthStatus } = React.useContext(AuthContext)
  const [isLoading, withLoading, Loading] = useLoading(false)
  const [showSnackbar, Snackbar] = useSnackbar(false)

  const handleRegister = async ({ username, password }) => {
    const { token, error } = await withLoading(() => post({
      body: {
        password, username
      },
      path: 'user'
    })).catch((err) => err)
    if (error) {
      return showSnackbar(error)
    }
    history.push('/home')
    setAuthStatus(token)
  }

  useEffect(() => {
    const fetchBanks = async() => {
      const correctBankProps = ({ bankName, id }) => ({
        title: bankName,
        value: String(id),
      })
      const { data: bankResps } : { data: any[] } = await withLoading(() => get({
        path: 'banking'
      }))
        .catch((err) => err)
  
      setBanks(map(correctBankProps, bankResps))
  
      const initialBank = bankResps[0].id
      setInitialValues({
        ...initialValues,
        bankId: String(initialBank)
      })
    }
    fetchBanks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='register-page'>
      <Loading color="secondary" />
      <Header/>
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        REGISTER
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleRegister}>
        {({ handleSubmit }) => 
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  validate={composeValidators(required, minLength(3))}
                  name="username"
                  label="Username"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={isEmail}
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
                  validate={compareWithField('password')}
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, minLength(11), maxLength(16))}
                  name="phone"
                  label="Phone number:"
                  type="number"
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={required}
                  name="bankId"
                  label="Bank name:"
                  fullWidth={true}
                  options={banks}
                  component={SelectInput} />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, minLength(10))}
                  name="bankAccountNumber"
                  label="Bank account number:"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={minLength(3)}
                  name="bankAccountName"
                  label="Bank account name:"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput} />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<AddIcon />}>
                  Register
                </Button>
              </div>
              <div>
                <Button variant="outlined" color="secondary" href="/register" startIcon={<LockOpenIcon />}>
                  Back to Login
                </Button>
              </div>
              <div>
                <LinkMUI color="primary">
                  Forgot Password? 
                </LinkMUI>
              </div>
            </div>
          </form>}
      </Form>
      <Snackbar/>
    </div>
  )
}

export default withRouter(Register)
