import {
  Typography,
} from '@material-ui/core'
import useLoading from 'hooks/loading'
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'services/http'

const PlayingGS: React.FC = () => {
  const [isLoading, withLoading, Loading] = useLoading(false)
  const { group = 'playtech', type = 'slots', code } = useParams()

  const proxies = {
    default: async () => {
      const { loginUrl }: { loginUrl: string } = await withLoading(() => get({
        body: {
          code,
          provider: group.toLocaleLowerCase(),
          type
        },
        path: 'game/login',
      }))
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
      const loginUrl = proxies[type] ? await proxies[type]() : await proxies.default()
      window.location.href = loginUrl
    }
    getLoginUrl()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, type, code])

  return (
    <div className='gs-page'>
      {isLoading && <Typography color="primary" variant="overline" display="block" gutterBottom={true}>
        Your game is loading ...
      </Typography>}
      <Loading/>
    </div>
  )
}

export default PlayingGS
