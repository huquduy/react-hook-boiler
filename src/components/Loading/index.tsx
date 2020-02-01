import LinearProgress, { LinearProgressProps } from "@material-ui/core/LinearProgress";
import React, { useState } from "react"
import './style.scss'

type TCallback = () => void
type HookLoading = (status: boolean) => [boolean, (callback: TCallback) => Promise<void>, React.FC<LinearProgressProps>]

const useLoading: HookLoading = (status) => {
  const [loading, setLoading] = useState(status)
  const withLoading = async (callback: TCallback): Promise<void> => {
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
  const LoadingComponent = (props: LinearProgressProps) => (
    <div>
      { loading ? <LinearProgress className="loading-container" {...props} /> : null }
    </div>
  )
  return [ loading, withLoading, LoadingComponent ]
}
export default useLoading