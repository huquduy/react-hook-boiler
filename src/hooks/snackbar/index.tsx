import {
  IconButton,
  Slide,
  Snackbar,
  Typography,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from "react"

const TransitionLeft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />
}

const useStyles = makeStyles((theme: Theme) => ({
  snackbar: {
    margin: theme.spacing(1)
  },
}))

type TCallback = (msg: string) => void

type HookSnackbar = (status: boolean) => [TCallback, React.FC]

const useSnackbar: HookSnackbar = (status = false) => {
  const classes = useStyles()
  const [open, setOpen] = useState(status)
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setOpen(false)
    setMessage('')
  }
  
  const showSnackbar = (msg: string) => {
    setMessage(msg)
    setOpen(true)
    setTimeout(() => {
      handleClose()
    }, 5000)
  }

  const SnackbarComponent = () => (
    <Snackbar
      className={classes.snackbar}
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionLeft}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      action={[
        <IconButton key="close" aria-label="close" color="secondary" onClick={handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
      message={
        <Typography color="secondary" variant="inherit" align="center" component="span" gutterBottom>
          {message}
        </Typography>
      }
    />
  )
  return [ showSnackbar, SnackbarComponent ]
}
export default useSnackbar