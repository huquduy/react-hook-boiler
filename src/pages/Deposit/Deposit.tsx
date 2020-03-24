import {
  Button,
  Typography
} from '@material-ui/core'
import {
  Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import SelectInput, { IOption } from 'components/SelectInput'
import TextInput from 'components/TextInput'
import { AuthContext } from "contexts/authContext"
import useLoading from 'hooks/loading'
import useSnackbar from 'hooks/snackbar'
import Numeral from 'numeral'
import { find, map, propEq } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

interface IForm {
  password: string,
  bankName: string,
  bankAccountName: string,
  bankAccountNumber: string,
  bankId: number,
  accountName: string,
  accountNumber: string,
  amount: string,
  calcAmount: string,

}
const { Form } = withTypes<IForm>()

const Deposit: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [initialValues, setInitialValues] = useState<IForm>({
    accountName: '',
    accountNumber: '',
    amount: '',
    bankAccountName: auth.bankAccountName,
    bankAccountNumber: auth.bankAccountNumber,
    bankId: auth.bankId,
    bankName: auth.bankName,
    password: '',
    calcAmount: ''
  })
  const [banks, setBanks] = useState<IOption[] | []>([])

  const [isLoading, withLoading, Loading] = useLoading(false)
  const [showSnackbar, Snackbar] = useSnackbar(false)

  const handleDeposit = async ({ amount, password }) => {
    const { error } = await withLoading(() => post({
      body: {
        amount, password
      },
      path: 'deposit/execute'
    })).catch(err => err)
    if (error) {
      return showSnackbar(error)
    }
    // history.push('/home')
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value
    const findResult = find(propEq('value',value ))(banks);
    setInitialValues({
      ...initialValues,
      bankId: Number(value),
      accountName: findResult.accountName,
      accountNumber: findResult.accountNumber
    })
  }
  const handleChangeAmount = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value
    const calcAmount = Numeral(Number(value) * 1000).format('0,0')
    setInitialValues({
      ...initialValues,
      amount: String(value),
      calcAmount: String(calcAmount)
    })
  }
  useEffect(() => {
    const fetchBanks = async () => {
      const correctBankProps = ({ bankName, id, accountName, accountNumber }) => ({
        accountName,
        accountNumber,
        title: bankName,
        value: String(id)
      })
      const { data: bankResps, error }: { data: any[], error: string } = await withLoading(() => get({
        path: 'banking'
      }))
        .catch((err) => err)
      if (error) {
        return;
      }
      setBanks(map(correctBankProps, bankResps))
      const initialBank = 0;
      setInitialValues({
        ...initialValues,
        accountName: bankResps[initialBank].accountName,
        accountNumber: bankResps[initialBank].accountNumber,
        bankId: initialBank,
      })
    }
    fetchBanks()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='deposit-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        DEPOSIT
        </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleDeposit}>
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  name="bankName"
                  label="From Bank :"
                  type="text"
                  fullWidth={true}
                  disabled={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  name="bankAccountName"
                  label="Bank Account Name: "
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  name="bankAccountNumber"
                  label="Bank Account No :"
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  name="bankId"
                  label="To Bank :"
                  fullWidth={true}
                  options={banks}
                  handleChange={handleChange}
                  variant="outlined"
                  component={SelectInput} />
              </div>
              <div>
                <Field
                  name="accountName"
                  label="Account Name :"
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  name="accountNumber"
                  label="Account Number :"
                  type="text"
                  disabled={true}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, mustBeNumber)}
                  name="amount"
                  label="Amount :"
                  type="text"
                  onChange={handleChangeAmount}
                  placeholder="kredit(1kredit=1000 rupiah)"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, mustBeNumber)}
                  name="calcAmount"
                  label="Transfer Bank :"
                  type="text"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              {/* <div className="des-amount">
                <span>(IDR 1000 = 1 unit)</span> <br />
                <span>Min : 50 IDR</span><br />
                <span>Max : 99000 IDR</span>
              </div> */}
              <div>
                <Field
                  validate={required}
                  name="password"
                  label="Confirm Password :"
                  type="password"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput} />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                  Submit
                  </Button>
              </div>
            </div>
          </form>}
      </Form>
      <Snackbar />
      <Bottom />
    </div>

  )
}

export default withRouter(Deposit)
