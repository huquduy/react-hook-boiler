import React from 'react'
import {
  Link
} from "react-router-dom"
import useLoading from 'components/Loading'
import useSnackbar from 'components/Snackbar'
import {
  Typography,
} from '@material-ui/core'
import http from 'services/http'
import LoginForm from './Form'

import './style.css'

function Login() {
  const [, withLoading, Loading] = useLoading(false)
  const [showSnackbar, Snackbar] = useSnackbar()

  const handlelogin = async ({ email, password }) => {
    const { token, error } = await withLoading(() => http.post({
      path: 'login',
      payload: {
        email, password
      }
    })).catch((err) => err)
    if (error) {
      return showSnackbar(error)
    }
    return http.setJwtToken(token)
  }

  return (
    <div className='login-page'>
      <Loading color="secondary" />
      <div className='login'>
        <Link to="/register">
          <div className="material-button alt-2"><span className="shape btn-hover"></span></div>
        </Link>
        <Typography className="title" variant="h5" align="center" component="h2" gutterBottom>
          LOGIN
        </Typography>
        <LoginForm onSubmit={handlelogin}/>
      </div>
      <Snackbar/>
    </div>
  )
}

export default Login
