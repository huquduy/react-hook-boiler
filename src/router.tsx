import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"

const Home = lazy(() => import('./pages/Home'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Component is being loaded...</div>}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;