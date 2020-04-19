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
  })
  const [credits, setCredits] = useState<IOption[] | []>([])
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)
  const [bonus, setBonus] = useState<IBonus>({
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
    fetchBonusProvider(target)
    await fetchCredits()
    return showDialog('Transfer Successfully', 'Success')
  }

  const handleChangeProvider = (change, targetProvider) => (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = String(event.target.value)
    if (targetProvider === 'target') {
      fetchBonusProvider(selectedValue)
    }
    const [{ value: mainWallet }, { value: secondProvider }] = credits
    if (selectedValue === mainWallet) {
      return change(secondProvider)
    }
    return change(mainWallet)
  }

  const fetchBonusProvider = async (provider: string) => {
    const ignoredBonuses = [MAIN_WALLET, '4D lottery', 'Poker IDN']
    const allowedBonus = !ignoredBonuses.includes(provider)
    if (allowedBonus) {
      const bonusResps = await withLoading(() => get({
        body: { provider },
        path: 'transfer/bonus/loyalty/'

      }))
        .catch((err) => err)
      if (bonusResps.error) {
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
    return setBonus({
      ...bonus,
      status: false
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
      fetchBonusProvider(target)
    }

    if (auth.username) {
      fetchInitial()
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
                    handleChange={handleChangeProvider(changeTarget, '')}
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
                    handleChange={handleChangeProvider(changeOrigin, 'target')}
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
                {bonus.status ?
                  <div>
                    <Field
                      name="loyaltyBonus"
                      type="checkbox"
                      label={(`${bonus.title} Bonus ${bonus.percentage * 100} %`).toUpperCase()}
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
            </form>)
        }}
      </Form>
      <ErrorDialogComponent />
      <Bottom />
    </div>

  )
}

export default Transfer
