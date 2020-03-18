import {
  Typography,
} from '@material-ui/core'
import useLoading from 'hooks/loading'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'services/http'

const PlayingGS: React.FC = () => {
  const [errorLogin, setErrorLogin] = useState<string>('')
  const [isLoading, withLoading, Loading] = useLoading(false)
  const { group = 'playtech', type = 'slots', code } = useParams()

  const proxies = {
    default: async () => {
      const { loginUrl, error }: { loginUrl: string, error: string } = await withLoading(() => get({
        body: {
          code,
          provider: group.toLocaleLowerCase(),
          type
        },
        path: 'game/login',
      })).catch(err => err)
      if (error) {
        return { error }
      }
      return loginUrl
    },
    gameplay: async () => {
      const { token }: { token: string } = await withLoading(() => get({
        path: 'user/simpleJWTToken',
      }))
      if (code !== 'casino') {
        return `http://mrslots.gpiops.com/${code}?fun=0&lang=en-us&op=HOKIBET188&token=${token}&mobile=1`
      }
      return `http://casino.gpiops.com/html5/mobile?token=${token}&op=HOKIBET188&lang=en-us&homeURL=gpiops.com`
    },
  }

  useEffect(() => {
    const getLoginUrl = async () => {
      const loginUrl = proxies[group] ? await proxies[group]() : await proxies.default()
      if (loginUrl.error) {
        return setErrorLogin(loginUrl.error)
      }
      window.location.href = loginUrl
    }
    getLoginUrl()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, type, code])

  return (
    <div className='gs-page'>
      {isLoading && !errorLogin.length && <Typography color="primary" variant="overline" display="block" gutterBottom={true}>
        Your game is loading ...
      </Typography>}
      {Boolean(errorLogin.length) && <Typography color="secondary" variant="overline" display="block" gutterBottom={true}>
        {`${group}: ${errorLogin}`}
      </Typography>}
      <Loading/>
    </div>
  )
}

export default PlayingGS
