import useLoading from 'hooks/loading'
import React, {useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'services/http'

const PlayingGS: React.FC = () => {
  const [isLoading, withLoading, Loading] = useLoading(false)
  const [iframeUrl, setIframeUrl] = useState<string>('')
  const { group, type = 'playtech', code } = useParams()

  useEffect(() => {
    const getToken = async () => {
      const { loginUrl } = await withLoading(() => get({
        body: {
          provider: type.toLocaleLowerCase()
        },
        path: 'game/login',
      }))
      setIframeUrl(loginUrl)
    }
    getToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, type, code])

  return (
    <div className='gs-page'>
      {isLoading && <p>Your game is loading ...</p>}
      <iframe title={type} src={iframeUrl} />
      <Loading/>
    </div>
  )
}

export default PlayingGS
