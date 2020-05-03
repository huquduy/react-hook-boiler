import {
  Button,
  Typography,
} from '@material-ui/core'
import {
  Add as AddIcon
} from '@material-ui/icons'
import Checkbox from 'components/Checkbox'
import Header from 'components/Header'
import SelectInput, { IOption } from 'components/SelectInput'
import TextInput from 'components/TextInput'
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compareWithField, composeValidators, isEmail, maxLength, minLength, required } from 'services/form'
import { get, post } from 'services/http'

import './style.scss'

interface IForm {
  email: string,
  bankId: number,
  bankAccountName: string,
  bankAccountNumber: string,
  username: string,
  password: string,
  phone: string,
  currency: string,
}
const { Form } = withTypes<IForm>()

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [initialValues, setInitialValues] = useState<IForm>({
    bankAccountName: '',
    bankAccountNumber: '',
    bankId: 2,
    currency: 'IDR',
    email: '',
    password: '',
    phone: '',
    username: ''

  })
  const [banks, setBanks] = useState<IOption[] | []>([])

  const { setAuthStatus } = React.useContext(AuthContext)
  const [isLoading, withLoading, Loading] = useLoading(false)
  // const [showSnackbar, Snackbar] = useSnackbar(false)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const handleRegister = async ({ username, password, phone, bankAccountName, bankAccountNumber, email, bankId, currency }) => {
    const data = await withLoading(() => post({
      body: {
        // tslint:disable-next-line: object-literal-sort-keys
        password, username, phone, bankAccountName, bankAccountNumber, email, bankId: Number(bankId), currency
      },
      path: 'user/signUp'
    })).catch((err) => {
      let message = '';
      if (err.length > 0) {
        message = `${err[0].parameter} ${err[0].message}`
      }
      return showDialog(message, 'Error')
    })
    if (data) {
      setAuthStatus(data.token)
      history.push('/home')
    }
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = String(event.target.value).toLowerCase();
    setInitialValues((prevState) =>({
      ...prevState, username: String(value)
    }))
  }

  useEffect(() => {
    const fetchBanks = async () => {
      const correctBankProps = ({ bankName, id }) => ({
        title: bankName,
        value: String(id),
      })
      const { data: bankResps }: { data: any[] } = await withLoading(() => get({
        path: 'banking'
      }))
        .catch((err) => err)

      setBanks(map(correctBankProps, bankResps))

      const initialBank = bankResps[0].id
      setInitialValues({
        ...initialValues,
        bankId: initialBank
      })
    }
    fetchBanks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='register-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        REGISTER
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleRegister}
      >
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  variant="outlined"
                  validate={composeValidators(required, minLength(3), maxLength(9))}
                  name="username"
                  label="Username"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput}
                  lowercase="true"
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={isEmail}
                  name="email"
                  label="Email"
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={composeValidators(required, minLength(5))}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={compareWithField('password')}
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={composeValidators(required, minLength(11), maxLength(16))}
                  name="phone"
                  label="Phone number"
                  type="text"
                  fullWidth={true}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={required}
                  name="bankId"
                  label="Bank name"
                  fullWidth={true}
                  options={banks}
                  component={SelectInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={composeValidators(required, minLength(9))}
                  name="bankAccountNumber"
                  label="Bank account number"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  variant="outlined"
                  validate={minLength(3)}
                  name="bankAccountName"
                  label="Bank account name"
                  fullWidth={true}
                  disable={isLoading.toString()}
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  name="loyaltyBonus"
                  type="checkbox"
                  label={'*I am over 18 years of age and have read and accepted Terms & Conditions, Privacy Policy & Betting Rules as published on this site.'}
                  disable={isLoading.toString()}
                  component={Checkbox}
                  validate={required}
                />
                {/* <FormControlLabel
                  className="custom-checkbox"
                  value="ischeck"
                  control={<Checkbox color="primary" onChange={handeChangeCheckbox} />}
                  label={'*I am over 18 years of age and have read and accepted Terms & Conditions, Privacy Policy & Betting Rules as published on this site.'}
                  name="isCheck"
                /> */}
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<AddIcon />}>
                  Register
                </Button>
              </div>
            </div>
          </form>}
      </Form>
      <ErrorDialogComponent />
    </div>
  )
}

export default withRouter(Register)
