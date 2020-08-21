import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import {
  AccountCircle as AccountCircleIcon,
  CreditCard as CreditCardIcon,
  LockOpen as LockOpenIcon,
  PermIdentity as PermIdentityIcon,
} from '@material-ui/icons'
import Link from 'components/Link';
import TextInput from 'components/TextInput'
import GAMES, { getGameType, IProviderProps, SLOT_TAB } from 'constant/games'
import { AuthContext } from 'contexts/authContext'
import useDialog from 'hooks/dialog'
import useErrorDialog from 'hooks/error-dialog'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { composeValidators, minLength, required } from 'services/form'
import { get, post } from 'services/http'
import './style.scss'

interface IForm {
  username: string,
  password: string
}
const { Form } = withTypes<IForm>()

const Header: React.FC = () => {
  const [, withLoading, ] = useLoading(false)
  const { auth, setUnauthStatus, setAuthStatus } = React.useContext(AuthContext)
  const [showCreditsDialog, CreditsDialog] = useDialog(false)
  const history = useHistory()
  const [showDialog, ErrorDialogComponent] = useErrorDialog(false)

  const fetchInformation = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user: User, error }: { user: any, error: string } = await withLoading(() => get({
      path: 'user/infomation'
    }))
      .catch((err) => err)
  }

  const handleLogout = () => {
    setUnauthStatus();
    history.push('/home')
    window.location.reload()
  }

  const handleLogin = async ({ username, password }) => {
    const { token, error } = await withLoading(() => post({
      body: {
        password, username
      },
      path: 'user/signIn'
    })).catch((err) => err)
    if (error) {
      return showDialog(error, 'Error')
    }
    history.push('/home')
    return setAuthStatus(token)
  }

  // const menuId = 'primary-search-account-menu';

  return (
    <div className='browser-header-wraper'>
      <div className="top-header-wrapper">
        <Container maxWidth="lg">
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={4}>
              <Grid container={true} justify="flex-start">
                <Link href="/"><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/logo.png`} /></Link>
              </Grid>
            </Grid>
            <Grid container={true} alignItems="center" xs={8}>
              {!auth.token ?
                <Form onSubmit={handleLogin}>
                  {({ handleSubmit }) => 
                    <form onSubmit={handleSubmit}>
                      <Grid container={true} justify="flex-end" className="left-top">
                        <div>
                          <Field
                            validate={composeValidators(required, minLength(3))}
                            name="username"
                            label="Username"
                            variant="outlined"
                            autoComplete="iusername"
                            size="small"
                            component={TextInput}
                          />
                        </div>
                        <div>
                          <Field
                            validate={composeValidators(required, minLength(5))}
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            autoComplete="new-password"
                            size="small"
                            component={TextInput}
                          />
                        </div>
                        <div>
                          <Button variant="outlined" color="primary" type="submit" startIcon={<LockOpenIcon />}>
                            Login
                          </Button>
                        </div>
                        <div>
                          <Button variant="outlined" color="primary" startIcon={<PermIdentityIcon />} className="success" href="/register">
                            Register
                          </Button>
                        </div>
                        <div>
                          <Link href="/forgot-password" className="link-primary">
                            Forgot Password? 
                          </Link>
                        </div>
                      </Grid>
                    </form>}
                </Form> : 
                <Grid container={true}>
                  <Grid container={true} alignItems="center" justify="flex-end" className="left-top">
                    <div>
                      <Link className="link-primary" target='_blank' href="http://v2.zopim.com/widget/livechat.html?key=4AV3AjiTSLlEJzZEwHTFojUPOVayt8Wr&amp;mid=cKfo1EYVt8j2Ow&amp;lang=ms&amp;hostname=www.hokibet188.com&amp;api_calls=%5B%5D"><img className='live-chat-icon' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/icons/contact.png`} /><span>Live Chat</span></Link>
                      |
                      <Link className="link-primary" href="/contact"><span>Contact us</span></Link>
                      |
                      <Link className="link-primary" href="/fag"><span>FAQ</span></Link>
                    </div>
                  </Grid>
                  <Grid container={true} alignItems="center" justify="flex-end" className="left-top">
                    <div className="user-details">
                      <AccountCircleIcon color="primary" />
                      <Typography color="primary" variant="subtitle2">
                        {auth.username},
                      </Typography>
                      &nbsp;&nbsp;
                      <CreditCardIcon color="primary" />
                      <Typography color="primary" variant="subtitle2">
                        {auth.balance} IDR
                      </Typography>
                    </div>
                  </Grid>
                  <Grid container={true} alignItems="center" justify="flex-end" className="left-top">
                    <div>
                      <Link className="link-primary" href="/deposit"><span>DEPOSIT</span></Link>
                      |
                      <Link className="link-primary" href="/withdraw"><span>WITHDRAW</span></Link>
                      |
                      <Link className="link-primary" href="/transfer"><span>TRANSFER</span></Link>
                      |
                      <Link className="link-primary" href="/report"><span>REPORT</span></Link>
                    </div>
                  </Grid>
                </Grid>}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="nav-wrapper">
        <Container maxWidth="lg" className="relative">
          <div className="nav-item">
            <Link href="/"><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/icons/home.png`} /><span>HOME</span></Link>
          </div>
          <div className="nav-item">
            <Link href="/download"><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/icons/download.png`} /><span>MOBILE</span></Link>
          </div>
          {map(({ idName, route = '', title }) => {
            const { providers }: { providers: IProviderProps[] } = getGameType(idName)
            return(
              <div className="nav-item">
                <Link href={route}><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/icons/${idName}.png`} /><span>{title}</span></Link>
                <div className="nav-pane absolute">
                  {
                    providers.map(({ nav, route: playingRoute, target } ) => 
                      <div key="playingRoute" className="provider-link">
                        <Link href={playingRoute} target={target}><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/providers/${nav}`} /></Link>
                      </div>)
                  }
                </div>
              </div>)
          }, GAMES)}
        </Container>
      </div>
      <ErrorDialogComponent />
      <CreditsDialog />
    </div>
  );
}

export default Header