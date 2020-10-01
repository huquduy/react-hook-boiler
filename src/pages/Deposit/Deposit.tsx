import {
  Button,
  Typography
} from '@material-ui/core'
import {
  Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Checkbox from 'components/Checkbox'
import Header from 'components/Header'
import SelectInput, { IOption } from 'components/SelectInput'
import TextInput from 'components/TextInput'
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import Numeral from 'numeral'
import { find, isEmpty, map, propEq } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

interface IForm {
  password: string,
  fromBank: string,
  bankAccountName: string,
  bankAccountNumber: string,
  toBank: number,
  accountName: string,
  accountNumber: string,
  amount: string,
  calcAmount: string,
  currency: string,
  paymentMethod: string,
  toBankName: string,
  extraBonus: boolean,
}
export interface IBonus {
  id: number,
  title: string,
  rollingTime: number,
  status: boolean,
  percentage: number,
}
const { Form } = withTypes<IForm>()

const Deposit: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
  const [initialValues, setInitialValues] = useState<IForm>({
    accountName: '',
    accountNumber: '',
    amount: '',
    bankAccountName: auth.bankAccountName,
    bankAccountNumber: auth.bankAccountNumber,
    fromBank: auth.bankName,
    password: '',
    calcAmount: '',
    currency: 'IDR',
    paymentMethod: 'Local Transfer',
    toBank: 0,
    toBankName: '',
    extraBonus: false
  })
  const [bonus, setBonus] = useState<IBonus>({
    id: 0,
    percentage: 0,
    rollingTime: 0,
    status: false,
    title: '',
  })
  const [banks, setBanks] = useState<IOption[] | []>([])

  const [isLoading, withLoading, Loading] = useLoading(false)

  const handleDeposit = async ({ amount, password, toBankName, currency, bankAccountNumber, bankAccountName, paymentMethod, fromBank, extraBonus }) => {
    const { error } = await withLoading(() => post({
      body: {
        amount, bankAccountName, bankAccountNumber, currency, extraBonus, fromBank, password, paymentMethod, toBank: toBankName
      },
      path: 'deposit/execute'
    })).catch(err => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    return showDialog('Deposit Succesfully', 'Success', '/reports/deposit')
  }
  const handleChange = (change) => (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target
    const { accountName, accountNumber, title } = find(propEq('value', value))(banks)
    change({ accountName, accountNumber, title })
  }
  const calculateAmount = (value) => {
    const result = Numeral(Number(value) * 1000).format('0,0')
    return result;
  }
  const fetchBonusProvider = async () => {
    const { bonus: bonusResps } = await withLoading(() => get({
      path: 'deposit/bonus/extra'
    }))
      .catch((err) => err)
    if (isEmpty(bonusResps)) {
      return setBonus({
        ...bonus,
        status: false
      })
    }
    return setBonus({
      ...bonusResps,
      status: Boolean(bonusResps)
    })
  }
  const correctBankProps = ({ bankName, id, accountName, accountNumber }) => ({
    accountName,
    accountNumber,
    title: bankName,
    value: String(id)
  })
  const fetchBanks = async () => {
    const { data: bankResps, error }: { data: any[], error: string } = await withLoading(() => get({
      path: 'banking/by/group'
    }))
      .catch((err) => err)
    if (error) {
      return;
    }
    const bankCorrected = map(correctBankProps, bankResps)
    setBanks(bankCorrected)
    return bankCorrected;
  }

  useEffect(() => {
    const fetchInitial = async () => {
      const bankCorrected = await fetchBanks() || []
      const initialBank = 0;
      setInitialValues({
        ...initialValues,
        accountName: bankCorrected[initialBank].accountName,
        accountNumber: bankCorrected[initialBank].accountNumber,
        toBank: Number(bankCorrected[initialBank].value),
        toBankName: bankCorrected[initialBank].title,
      })
      fetchBonusProvider()
    }
    if (auth.username) {
      fetchInitial()
    }
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
        onSubmit={handleDeposit}
      >
        {({ handleSubmit, form }) => {
          const changeCalcAmount = value => form.change('calcAmount', value)
          const changeBankInfo = (data) => form.batch(() => {
            const { accountName, accountNumber, title } = data
            form.change('accountName', accountName)
            form.change('accountNumber', accountNumber)
            form.change('toBankName', title)
          })
          return (
            <form onSubmit={handleSubmit}>
              <div className='container'>
                <div>
                  <Field
                    name="fromBank"
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
                    name="toBank"
                    label="To Bank :"
                    fullWidth={true}
                    options={banks}
                    handleChange={handleChange(changeBankInfo)}
                    variant="outlined"
                    component={SelectInput}
                  />
                </div>
                <div>
                  <Field
                    name="accountName"
                    label="Account Name :"
                    type="text"
                    disabled={true}
                    fullWidth={true}
                    component={TextInput}
                  />
                </div>
                <div>
                  <Field
                    name="accountNumber"
                    label="Account Number :"
                    type="text"
                    disabled={true}
                    fullWidth={true}
                    component={TextInput}
                  />
                </div>
                <div>
                  <Field
                    validate={composeValidators(required, mustBeNumber)}
                    name="amount"
                    label="Amount :"
                    type="text"
                    placeholder="kredit(1kredit=1000 rupiah)"
                    disable={isLoading.toString()}
                    fullWidth={true}
                    component={TextInput}
                  />
                  <OnChange name="amount">
                    {(value) => {
                      const result = calculateAmount(value)
                      changeCalcAmount(result)
                    }}
                  </OnChange>
                </div>

                <div>
                  <Field
                    validate={composeValidators(required)}
                    name="calcAmount"
                    label="Transfer Bank :"
                    type="text"
                    disable={isLoading.toString()}
                    fullWidth={true}
                    component={TextInput}
                    disabled={true}
                  />
                </div>
                <div>
                  <Field
                    validate={required}
                    name="password"
                    label="Confirm Password :"
                    type="password"
                    disable={isLoading.toString()}
                    fullWidth={true}
                    component={TextInput}
                  />
                </div>
                {bonus.status ?
                  <div>
                    <Field
                      name="extraBonus"
                      type="checkbox"
                      label={(`${bonus.title} Bonus ${bonus.percentage * 100} % WITHDRAWN ANY TIME`).toUpperCase()}
                      disable={isLoading.toString()}
                      component={Checkbox}
                    />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      * I want to claim bonus with term and conditions. Rollover {bonus.rollingTime} Times
                  </Typography>
                  </div> : null}
                <div>
                  <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                    Submit
              </Button>
                </div>
              </div>
            </form>
          )
        }}


      </Form>
      <ErrorDialogComponent />
      {/* <Snackbar /> */}
      <Bottom />
    </div>

  )
}

export default withRouter(Deposit)
