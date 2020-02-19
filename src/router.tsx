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
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;