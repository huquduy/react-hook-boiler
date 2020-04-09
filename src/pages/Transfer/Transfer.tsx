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
import { AuthContext } from 'contexts/authContext'
import useErrorDialog from 'hooks/error-dialog/error-dialog'
import useLoading from 'hooks/loading'
import useSnackbar from 'hooks/snackbar'
import { filter, find, map, pipe, propEq } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

const MAIN_WALLET = 'Main Wallet'

interface IForm {
  origin: string,
  target: string,
  amount: string,
  loyaltyBonus: boolean,
  credit: string
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

const titleWithCredit = ({ title, value }) => ({
  title: `${title} - (${value} IDR)`,
  value: title
})

const Transfer: React.FC = () => {
  const { auth } = React.useContext(AuthContext)
  const [initialValues, setInitialValues] = useState<IForm>({
    amount: '',
    credit: '',
    loyaltyBonus: false,
    origin: '',
    target: '',
  })
  const [originOptions, setOriginOptions] = useState<IOption[] | []>([])
  const [targetOptions, setTargetOptions] = useState<IOption[] | []>([])
  const [credits, setCredits] = useState<IOption[] | []>([])
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
  const [bonus, setBonus] = useState<IBonus>({
    fullText: '',
    id: 0,
    percentage: 0,
    rollingTime: 0,
    status: 1,
    title: '',
  })
  const [checkShow, setCheckShow] = useState(false)
  const [isLoading, withLoading, Loading] = useLoading(false)
  const [, Snackbar] = useSnackbar(false)

  const handleTransfer = async ({ amount, loyaltyBonus, origin, target }) => {
    const { error } = await withLoading(() => post({
      body: {
        amount, loyaltyBonus, origin, target
      },
      path: 'transfer/execute'
    })).catch(err => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    const { data: creditResps } = await withLoading(() => get({ path: 'user/credit' }))
    const correctCreditProps = ({ title, data }): IOption => ({
      title,
      value: data
    })
    const creditsCorrected = map(correctCreditProps)(creditResps)
    setCredits(creditsCorrected)
    const optionsCorrected = map(titleWithCredit)(creditsCorrected)
    setOriginOptions(optionsCorrected)
    setTargetOptions(optionsCorrected)
    // const [{ title: origin }, { title: target }] = creditsCorrected
    // const { data: credit } = find(propEq('title', origin))(creditResps);
    // setInitialValues({
    //   ...initialValues,
    //   credit
    // })
    return showDialog('Transfer Successfully', 'Success')
  }

  const handleChangeTransferFrom = (event: React.ChangeEvent<{ value: unknown }>) => {
    // const { value } = event.target
    // const { data: credit } = find(propEq('label', value))(credits);
    // setInitialValues({
    //   ...initialValues,
    //   credit,
    //   origin: String(value)
    // })
  }

  const handleChangeTransferTo = (event: React.ChangeEvent<{ value: unknown }>) => {
    const target = String(event.target.value)
    fetchBonusProvider(target)
    if (target === MAIN_WALLET) {
      const notMainWallet = ({ title }: IOption) => title !== MAIN_WALLET
      const suppliersFiltered = pipe(
        filter<IOption, 'array'>(notMainWallet),
        map(titleWithCredit)
      )(credits)
      return setOriginOptions(suppliersFiltered)
    }
    const isMainWallet = ({ title }: IOption) => title === MAIN_WALLET
    const mainWalletFiltered = pipe(
      filter<IOption, 'array'>(isMainWallet),
      map(titleWithCredit)
    )(credits)
    return setOriginOptions(mainWalletFiltered)
  }

  const handeChangeCheckbox = (event: React.ChangeEvent<{ checked: boolean }>) => {
    const value = event.target.checked
    setInitialValues({
      ...initialValues,
      loyaltyBonus: value
    })
  }
  const fetchBonusProvider = async (provider: string) => {
    const ignoredBonuses = ['4D lottery', 'Poker IDN']
    const isAllowedBonus = !ignoredBonuses.includes(provider)
    setCheckShow(isAllowedBonus)
    if (isAllowedBonus) {
      const bonusResps = await withLoading(() => get({
        body: { provider },
        path: 'transfer/bonus/loyalty/'

      }))
        .catch((err) => err)
      if (bonusResps.error) {
        setCheckShow(false)
        return;
      }
      setBonus({ ...bonusResps, ...{ fullText: (`${bonusResps.title} Bonus ${bonusResps.percentage * 100} %`).toUpperCase() } })
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const correctCreditProps = ({ title, data }): IOption => ({
        title,
        value: data
      })
      const [{ data: creditResps }] = await withLoading(() => Promise.all([
        withLoading(() => get({ path: 'user/credit' }))
      ]))
      const creditsCorrected = map(correctCreditProps)(creditResps)
      setCredits(creditsCorrected)
      const optionsCorrected = map(titleWithCredit)(creditsCorrected)
      setOriginOptions(optionsCorrected)
      setTargetOptions(optionsCorrected)
      const [{ title: origin }, { title: target }] = creditsCorrected
      setInitialValues({
        ...initialValues,
        origin,
        target,
      })
      fetchBonusProvider(origin)
    }

    if (auth.username) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='deposit-page'>
      <Loading color="primary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        BALANCE TRANSFER
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={handleTransfer}
      >
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  name="origin"
                  label="Transfer From"
                  fullWidth={true}
                  options={originOptions}
                  handleChange={handleChangeTransferFrom}
                  variant="outlined"
                  component={SelectInput}
                />
              </div>
              <div>
                <Field
                  name="target"
                  label="Transfer To"
                  fullWidth={true}
                  options={targetOptions}
                  handleChange={handleChangeTransferTo}
                  variant="outlined"
                  component={SelectInput}
                />
              </div>
              <div>
                <Field
                  validate={composeValidators(required, mustBeNumber)}
                  name="amount"
                  label="Amount"
                  type="text"
                  disable={isLoading.toString()}
                  fullWidth={true}
                  component={TextInput}
                />
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
              </div> : null}
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                  Submit
                </Button>
              </div>
            </div>
          </form>}
      </Form>
      <ErrorDialogComponent />
      <Snackbar />
      <Bottom />
    </div>

  )
}

export default Transfer
