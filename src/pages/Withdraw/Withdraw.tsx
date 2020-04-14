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
// import useSnackbar from 'hooks/snackbar'
import Numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { put } from 'services/http'
import './style.scss'

interface IForm {
  confirmPassword: string,
  bankName: string,
  bankAccountName: string,
  bankAccountNo: string,
  amount: string,
  calcAmount:string;

}
const { Form } = withTypes<IForm>()

const Withdraw: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
  const [initialValues, setInitialValues] = useState<IForm>({
    amount: '',
    bankAccountName: auth.bankAccountName,
    bankAccountNo: auth.bankAccountNumber,
    bankName: auth.bankName,
    confirmPassword: '',
    calcAmount: '',
  })

  const [isLoading, withLoading, Loading] = useLoading(false)
  // const [showSnackbar, Snackbar] = useSnackbar(false)

  const handleDeposit = async ({ amount, confirmPassword, bankAccountName, bankAccountNo, bankName}) => {
    const { error } = await withLoading(() => put({
      body: {
        amount, confirmPassword, bankAccountName, bankAccountNo, bankName
      },
      path: 'withdraws/execute'
    })).catch((err) => err)
    if (error) {
      // return showSnackbar(error)
      return showDialog(error, 'Error')
    }
    return showDialog('Withdraws Succesfully', 'Success')

  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target
    const calcAmount =  Numeral(Number(value) * 1000).format('0,0')
    setInitialValues({
      ...initialValues,
      amount: String(value),
      calcAmount: String(calcAmount)
    })
  }
  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='deposit-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        WITHDRAWAL
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleDeposit}
      >
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
                  name="bankAccountNo"
                  label="Bank Account No :"
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
                  disable={isLoading.toString()}
                  fullWidth={true}
                  onChange={handleChange}
                  placeholder="kredit(1kredit=1000 rupiah)"
                  component={TextInput}
                />
              </div>
              <div>
                <Field
                  validate={composeValidators(required)}
                  name="calcAmount"
                  label="Transfer Bank :"
                  type="text"
                  fullWidth={true}
                  component={TextInput}
                  disabled={true}
                />
              </div>
              <div>
                <Field
                  validate={required}
                  name="confirmPassword"
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
      {/* <Snackbar /> */}
      <ErrorDialogComponent />
      <Bottom />
    </div>

  )
}

export default withRouter(Withdraw)
