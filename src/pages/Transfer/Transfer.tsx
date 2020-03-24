import {
    Button,
    Checkbox,
    FormControlLabel,
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
import { find, map, propEq } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

interface IForm {
    origin: string,
    target: string,
    amount: string,
    loyaltyBonus: boolean,
    credit: string
}

export interface ICredit {
    label: string;
    value: string;
}
export interface IBonus {
    id: number,
    title: string,
    rollingTime: number,
    status: number,
    percentage: number,
    fullText: string,
}
const { Form } = withTypes<IForm>()

const Transfer: React.FC<RouteComponentProps> = ({ history }) => {
    const { auth } = React.useContext(AuthContext)
    const [initialValues, setInitialValues] = useState<IForm>({
        amount: '',
        credit: '',
        loyaltyBonus: false,
        origin: '',
        target: '',
    })
    const [wallets, setWallets] = useState<IOption[] | []>([])
    const [suppliers, setSuppliers] = useState<IOption[] | []>([])
    const [credits, setCredits] = useState<ICredit[] | []>([])
    const [bonus, setBonus] = useState<IBonus>({
        id: 0,
        title: '',
        fullText: '',
        rollingTime: 0,
        percentage: 0,
        status: 1,
    })
    const [checkShow, setCheckShow] = useState(false)
    const [isLoading, withLoading, Loading] = useLoading(false)
    const [showSnackbar, Snackbar] = useSnackbar(false)

    const handleTransfer = async ({ amount, loyaltyBonus, origin, target }) => {
        const { error } = await withLoading(() => post({
            body: {
                amount, loyaltyBonus, origin, target
            },
            path: 'transfer/execute'
        })).catch(err => err)
        if (error) {
            return showSnackbar(error)
        }
        // history.push('/home')
    }
    const handleChangeTransferFrom = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value
        const findResult = find(propEq('label', value))(credits);
        setInitialValues({
            ...initialValues,
            credit: findResult.value,
            origin: String(value)
        })
    }
    const handleChangeTransferTo = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = String(event.target.value)
        setInitialValues({
            ...initialValues,
            target: value
        })
        fetchBonusProvider(value);

    }
    const handeChangeCheckbox = (event: React.ChangeEvent<{ checked: boolean }>) => {
        const value = event.target.checked
        setInitialValues({
            ...initialValues,
            loyaltyBonus: value
        })


    }
    const fetchBonusProvider = async (value: string) => {
        const arrNoFetch = ['4D lottery', 'Poker IDN']
        const checkFetch = arrNoFetch.indexOf(value);
        setCheckShow(false)
        if(checkFetch<0){
            setCheckShow(true)
            const params: any = { provider: value }
        const bonusResps = await withLoading(() => get({
            body: params,
            path: 'transfer/bonus/loyalty/'

        }))
            .catch((err) => err)
        setBonus({ ...bonusResps, ...{ fullText: (`${bonusResps.title} Bonus ${bonusResps.percentage * 100} %`).toUpperCase() } })
        }
    }
    useEffect(() => {
        const correctDataProps = (item: any) => ({
            title: item,
            value: item,
        })
        const fetchWallets = async () => {
            const { data: walletResps, error }: { data: any[], error: string } = await withLoading(() => get({
                path: 'wallets'
            }))
                .catch((err) => err)
            if (error) {
                return;
            }
            setWallets(map(correctDataProps, walletResps))
            const initialWallet = walletResps[0];
            setInitialValues({
                ...initialValues,
                origin: String(initialWallet)
            })
        }
        const fetchCredits = async () => {
            const correctCreditProps = ({ title, data }) => ({
                label: title,
                value: data
            })
            const { data: creditResps, error }: { data: any[], error: string } = await withLoading(() => get({
                path: 'user/credit'
            }))
                .catch((err) => err)

            if (error) {
                // tslint:disable-next-line: no-console
                console.log(error)
            }
            setCredits(map(correctCreditProps, creditResps))
            setInitialValues({
                ...initialValues,
                credit: creditResps[0].data
            })

        }
        const fetchSupplier = async () => {
            const { data: supplierResps, error }: { data: any[], error: string } = await withLoading(() => get({
                path: 'suppliers'
            }))
                .catch((err) => err)
            if (error) {
                return;
            }
            setSuppliers(map(correctDataProps, supplierResps))
            const initialSupplier = supplierResps[0];
            setInitialValues({
                ...initialValues,
                target: initialSupplier,
            })
            fetchBonusProvider(supplierResps[0])
        }
        if (auth.username) {
            fetchCredits()
            fetchWallets()
            fetchSupplier()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='deposit-page'>
            <Loading color="secondary" />
            <Header />
            <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
                BALANCE TRANSFER
          </Typography>
            <Form
                initialValues={initialValues}
                onSubmit={handleTransfer}>
                {({ handleSubmit }) =>
                    <form onSubmit={handleSubmit}>
                        <div className='container'>
                            <div>
                                <Field
                                    name="origin"
                                    label="Transfer From"
                                    fullWidth={true}
                                    options={wallets}
                                    handleChange={handleChangeTransferFrom}
                                    variant="outlined"
                                    component={SelectInput} />
                            </div>
                            <div>
                                <Field
                                    name="credit"
                                    label="Credit"
                                    type="text"
                                    disabled={true}
                                    fullWidth={true}
                                    component={TextInput} />
                            </div>
                            <div>
                                <Field
                                    name="target"
                                    label="Transfer To"
                                    fullWidth={true}
                                    options={suppliers}
                                    handleChange={handleChangeTransferTo}
                                    variant="outlined"
                                    component={SelectInput} />
                            </div>
                            <div>
                                <Field
                                    validate={composeValidators(required, mustBeNumber)}
                                    name="amount"
                                    label="Amount"
                                    type="text"
                                    disable={isLoading.toString()}
                                    fullWidth={true}
                                    component={TextInput} />
                            </div>
                            {checkShow ? <div>
                                <FormControlLabel
                                    value="loyaltyBonus"
                                    control={<Checkbox color="primary" onChange={handeChangeCheckbox} />}
                                    label={bonus.fullText}
                                    name="loyaltyBonus"
                                />
                                <Typography variant="caption" display="block" gutterBottom={true}>
                                    * I want to claim bonus with term and conditions. Rollover {bonus.rollingTime} Times
                                </Typography>
                            </div>: null}
                            

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

export default withRouter(Transfer)
