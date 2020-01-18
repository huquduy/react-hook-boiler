import LinearProgress, { LinearProgressProps } from "@material-ui/core/LinearProgress";

import React, { useState } from "react"

type TCallback = () => void;

const useLoading = (status: boolean) => {
  const [loading, setLoading] = useState(status)
  const withLoading = async (callback: TCallback) => {
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
      { loading ? <LinearProgress {...props} /> : null }
    </div>
  )
  return [ loading, withLoading, LoadingComponent ]
}
export default useLoading