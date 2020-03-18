import {
  Typography,
} from '@material-ui/core'
import useLoading from 'hooks/loading'
import React, {useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'services/http'

const PlayingTG: React.FC = () => {
  const formTGLogin = useRef() as React.MutableRefObject<HTMLFormElement>
  const [isLoading, withLoading, Loading] = useLoading(false)
  const [loginUrl, setLoginUrl] = useState<string>('')
  const [token, setToken] = useState<any>('')
  const { group = 'joker', type, code } = useParams()

  useEffect(() => {
    const getToken = async () => {
      const { token: tokenResp } = await withLoading(() => get({
        body: {
          provider: 'sbo'
        },
        path: 'game/login',
      }))
      setToken(tokenResp)
    }
    setLoginUrl(`http://wwwut01.tr8games.com/middleware/v1/Dispatch/Game/${type}/${group}/${code}/MOBILE/en-US`)
    getToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, type, code])

  useEffect(() => {
    if (token && token.length) {
      formTGLogin.current.submit()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div className='slot-page'>
      {isLoading && <Typography color="primary" variant="overline" display="block" gutterBottom={true}>
        Your game is loading ...
      </Typography>}
      <form style={{ display: 'none' }} id="tg-form" method="post" action={loginUrl} ref={formTGLogin}>
          <input type="text" name="Payload" value={token} />
          <input type="submit" value="Submit" />
      </form>
      <Loading/>
    </div>
  )
}

export default PlayingTG
