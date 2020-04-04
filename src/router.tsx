import { AuthContext } from 'contexts/authContext'
import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Deposit = lazy(() => import('./pages/Deposit'))
const Withdraw = lazy(() => import('./pages/Withdraw'))
const TermCondition = lazy(() => import('./pages/TermCondition'))
const Profile = lazy(() => import('./pages/Profile'))
const Games = lazy(() => import('./pages/Games'))
const Slot = lazy(() => import('./pages/Slot'))
const MorePage = lazy(()=> import('./pages/MorePage'))
const AboutUs = lazy(()=> import('./pages/AboutUs'))
const Privacy = lazy(()=> import('./pages/Privacy'))
const Banking = lazy(()=> import('./pages/Banking'))
const Reponsible = lazy(()=> import('./pages/Reponsible'))
const Promotion = lazy(()=> import('./pages/Promotion'))
const Faq = lazy(()=> import('./pages/Faq'))
const PlayingTG = lazy(()=> import('./pages/PlayingTG'))
const PlayingGS = lazy(()=> import('./pages/PlayingGS'))
const Contact = lazy(()=> import('./pages/Contact'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Transfer = lazy(()=> import('./pages/Transfer'))
const DepositReport = lazy(()=> import('./pages/Report/Deposit'))
const WithdrawReport = lazy(()=> import('./pages/Report/Withdraw'))
const TransferReport = lazy(()=> import('./pages/Report/Transfer'))

const RequiredLoginRooute = ({ component: Component, ...rest }) => {
  const { auth: { isLogged } } = React.useContext(AuthContext)
  const render = props => isLogged ? <Component {...props} /> : <Redirect to="/login" />
  return (
    <Route
      {...rest}
      render={render}
    />
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='primary'>Website is being loaded...</div>}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/term-condition" component={TermCondition} />
          <Route path="/profile" component={Profile} />
          <Route path="/games/:type" component={Games} />
          <Route path="/slots/:providerId" component={Slot} />
          <Route path="/more-page" component={MorePage} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/banking" component={Banking} />
          <Route path="/reposible" component={Reponsible} />
          <Route path="/promotion" component={Promotion} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <RequiredLoginRooute path="/tg/groups/:group/types/:type/codes/:code" component={PlayingTG} />
          <RequiredLoginRooute path="/gs/groups/:group/types/:type/codes/:code" component={PlayingGS} />
          <RequiredLoginRooute path="/transfer" component={Transfer} />
          <RequiredLoginRooute path="/report/deposit" component={DepositReport} />
          <RequiredLoginRooute path="/report/withdraw" component={WithdrawReport} />
          <Route path="/report/transfer" component={TransferReport} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;