import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState } from 'react'
import './style.scss'

type TCallback = () => any
type HookLoading = (status: boolean) => [boolean, (callback: TCallback) => Promise<any>, React.FC<{color?: string}>]

const useLoading: HookLoading = (status) => {
  const [loading, setLoading] = useState(false)
  const withLoading = async (callback: TCallback): Promise<any> => {
    setLoading(true)
    try {
      const response = await callback()
      setLoading(false)
      return response
    } catch (error) {
      setLoading(false)
      throw error
    }
  }
  const LoadingComponent = (props) => (
    <Backdrop className="loading-container" open={loading}>
      <CircularProgress {...props} />
    </Backdrop>
  )
  return [ loading, withLoading, LoadingComponent ]
}
export default useLoading