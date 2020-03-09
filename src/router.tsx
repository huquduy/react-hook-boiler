import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Deposit = lazy(() => import('./pages/Deposit'))
const Withdraw = lazy(() => import('./pages/Withdraw'))
const TermCondition = lazy(() => import('./pages/TermCondition'))
const Profile = lazy(() => import('./pages/Profile'))
const Games = lazy(() => import('./pages/Games'))
const Slot = lazy(() => import('./pages/Slot'))
const MorePage = lazy(()=> import ('./pages/MorePage'))
const AboutUs = lazy(()=> import ('./pages/AboutUs'))
const Privacy = lazy(()=> import ('./pages/Privacy'))
const Banking = lazy(()=> import ('./pages/Banking'))
const Reponsible = lazy(()=> import ('./pages/Reponsible'))
const Promotion = lazy(()=> import ('./pages/Promotion'))
const Faq = lazy(()=> import ('./pages/Faq'))


const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Component is being loaded...</div>}>
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
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;