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
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'
import { composeValidators, mustBeNumber, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

const MAIN_WALLET = 'Main Wallet'
const ignoredBonuses = [MAIN_WALLET, '4D lottery', 'Poker IDN']

interface IForm {
  origin: string,
  target: string,
  amount: string,
  loyaltyBonus: boolean,
  welcomeBonus: boolean,
  credit: string
}

export interface IBonus {
  title: string,
  rollingTime: number,
  status: boolean,
  percentage: number,
}

const { Form } = withTypes<IForm>()

const titleWithCredit = ({ title, data }) => ({
  title: `${title} - (${data} IDR)`,
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
    welcomeBonus: false,
  })
  const [credits, setCredits] = useState<IOption[] | []>([])
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
  const [loyaltyBonus, setLoyaltyBonus] = useState<IBonus>({
    percentage: 0,
    rollingTime: 0,
    status: false,
    title: '',
  })
  const [welcomeBonus, setWelcomeBonus] = useState<IBonus>({
    percentage: 0,
    rollingTime: 0,
    status: false,
    title: '',
  })
  const [isLoading, withLoading, Loading] = useLoading(false)

  const fetchCredits = async () => {
    const [{ data: creditResps }] = await withLoading(() => Promise.all([
      withLoading(() => get({ path: 'user/credit' }))
    ]))
    const creditsCorrected = map(titleWithCredit)(creditResps)
    setCredits(creditsCorrected)
    return creditsCorrected
  }

  const handleTransfer = async ({ amount, loyaltyBonus: loyaltyBonusClaim, welcomeBonus: welcomeBonusClaim, origin, target }) => {
    const { error } = await withLoading(() => post({
      body: {
        amount,
        bonus: welcomeBonus.status ? welcomeBonusClaim : undefined,
        loyaltyBonus: loyaltyBonus.status ? loyaltyBonusClaim : undefined,
        origin, target
      },
      path: 'transfer/execute'
    })).catch(err => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    fetchLoyaltyBonus(target)
    await fetchCredits()
    return showDialog('Transfer Successfully', 'Success')
  }

  const handleChangeProvider = (change) => (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = String(event.target.value)
    const [{ value: mainWallet }, { value: secondProvider }] = credits
    if (selectedValue === mainWallet) {
      return change(secondProvider)
    }
    return change(mainWallet)
  }

  const fetchLoyaltyBonus = async (provider: string) => {
    const allowedBonus = !ignoredBonuses.includes(provider)
    const disableLoyaltyBonus = () => setLoyaltyBonus({
      ...loyaltyBonus,
      status: false
    })
    if (allowedBonus) {
      const bonusResps = await withLoading(() => get({
        body: { provider },
        path: 'transfer/bonus/loyalty/'

      }))
        .catch((err) => err)

      // Disable Loyalty bonus if occur error 
      if (bonusResps.error) {
        return disableLoyaltyBonus()
      }
      return setLoyaltyBonus({
        ...bonusResps,
        status: Boolean(bonusResps)
      })
    }
    return disableLoyaltyBonus()
  }

  const fetchWelcomeBonus = async () => {
    const disableWelcomeBonus = () => setWelcomeBonus({
      ...welcomeBonus,
      status: false
    })
    const bonusResps = await withLoading(() => get({
      path: 'transfer/bonus/welcome/'
    }))
      .catch((err) => err)

    // Disable Welcome bonus if occur error 
    if (bonusResps.error) {
      return disableWelcomeBonus()
    }
    return setWelcomeBonus({
      ...bonusResps,
      status: Boolean(bonusResps)
    })
  }

  useEffect(() => {
    const fetchInitial = async () => {
      const creditsCorrected = await fetchCredits()
      const [{ value: origin }, { value: target }] = creditsCorrected
      setInitialValues({
        ...initialValues,
        origin,
        target,
      })
      fetchWelcomeBonus()
      fetchLoyaltyBonus(target)
    }

    if (auth.username) {
      fetchInitial()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (welcomeBonus.status) {
      setLoyaltyBonus({
        ...loyaltyBonus,
        status: false
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomeBonus])

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
        {({ handleSubmit, form }) => {
          const changeOrigin = value => form.change('origin', value)
          const changeTarget = value => form.change('target', value)
          return (
            <form onSubmit={handleSubmit}>
              <div className='container'>
                <div>
                  <Field
                    name="origin"
                    label="Transfer From"
                    fullWidth={true}
                    options={credits}
                    handleChange={handleChangeProvider(changeTarget)}
                    variant="outlined"
                    component={SelectInput}
                  />
                </div>
                <div>
                  <Field
                    name="target"
                    label="Transfer To"
                    fullWidth={true}
                    options={credits}
                    // tslint:disable-next-line: jsx-no-lambda
                    handleChange={event => {
                      handleChangeProvider(changeOrigin)(event)
                    }}
                    variant="outlined"
                    component={SelectInput}
                  />
                  <OnChange name="target">
                    {(value) => {
                      fetchLoyaltyBonus(value)
                    }}
                  </OnChange>
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
                {welcomeBonus.status ?
                  <div>
                    <Field
                      name="welcomeBonus"
                      type="checkbox"
                      label={(`${welcomeBonus.title} Bonus ${welcomeBonus.percentage * 100} %`).toUpperCase()}
                      disable={isLoading.toString()}
                      component={Checkbox}
                    />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      * I want to claim bonus with term and conditions. Rollover {welcomeBonus.rollingTime} Times
                    </Typography>
                  </div> : null}
                {loyaltyBonus.status && !welcomeBonus.status ?
                  <div>
                    <Field
                      name="loyaltyBonus"
                      type="checkbox"
                      label={(`${loyaltyBonus.title} Bonus ${loyaltyBonus.percentage * 100} %`).toUpperCase()}
                      disable={isLoading.toString()}
                      component={Checkbox}
                    />
                    <Typography variant="caption" display="block" gutterBottom={true}>
                      * I want to claim bonus with term and conditions. Rollover {loyaltyBonus.rollingTime} Times
                    </Typography>
                  </div> : null}
                <div>
                  <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                    Submit
                  </Button>
                </div>
              </div>
            </form>)
        }}
      </Form>
      <ErrorDialogComponent />
      <Bottom />
    </div>

  )
}

export default Transfer
