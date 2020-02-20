import {
    Button,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from '@material-ui/core'
import {
    ExpandMore as ExpandMoreIcon,
    Home as HomeIcon,
    Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import { AuthContext } from "contexts/authContext"
import useLoading from 'hooks/loading'
import useSnackbar from 'hooks/snackbar'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

interface IForm {
    password: string,
    bankName: string,
    currency: string,
    bankAccountName: string,
    bankAccountNumber: string,
    amount: string,

}
const { Form } = withTypes<IForm>()

const Withdraw: React.FC<RouteComponentProps> = ({ history }) => {
    const { auth } = React.useContext(AuthContext)
    const [initialValues, setInitialValues] = useState<IForm>({
        amount: '',
        bankAccountName: auth.bankAccountName,
        bankAccountNumber: auth.bankAccountNumber,
        bankName: auth.bankName,
        currency: auth.currency,
        password: '',

    })

    const [isLoading, withLoading, Loading] = useLoading(false)
    const [showSnackbar, Snackbar] = useSnackbar(false)

    const handleDeposit = async ({ amount, password }) => {
        const { error } = await withLoading(() => post({
            body: {
                amount, password
            },
            path: 'withdraws/execute'
        })).catch((err) => err)
        if (error) {
            return showSnackbar(error)
        }
        // history.push('/home')
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
                        onSubmit={handleDeposit}>
                        {({ handleSubmit }) =>
                            <form onSubmit={handleSubmit}>
                                <div className='container'>
                                    <div>
                                        <Field
                                            name="paymentMethod"
                                            label="Payment Method: "
                                            type="text"
                                            fullWidth={true}
                                            disabled={true}
                                            component={TextInput} />
                                    </div>
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
                                            name="currency"
                                            label="Currency"
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
                                            disable={isLoading.toString()}
                                            fullWidth={true}
                                            component={TextInput} />
                                    </div>
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

export default withRouter(Withdraw)