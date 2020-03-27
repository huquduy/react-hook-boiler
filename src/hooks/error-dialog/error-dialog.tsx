import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@material-ui/core";
import React, { FC, ReactNode, useState } from "react"
import './style.scss'

type TCallback = (msg: string, statusAPI: string) => void
type HookDialog = (status: boolean) => [TCallback, React.FC<{ children?: ReactNode, title?: string }>]

const useErrorDialog: HookDialog = (status) => {
  const [isOpened, setIsOpened] = useState(status)
  const [message, setMessage] = useState('')
  const [statusApi, setStatusAPI] = useState('')

  const handleClose = () => {
    setIsOpened(false)
    setMessage('')
    setStatusAPI('')
  }

  const showDialog = ( msg: string, statusAPI: string) => {
    setMessage(msg)
    setStatusAPI(statusAPI)
    setIsOpened(true)

  }

  const ErrorDialogComponent: FC<{ children?: ReactNode, title?: string }> = ({
    children, title
  }) => (
      <div className="dialog">
        <Dialog
          open={Boolean(isOpened)}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {statusApi === "Error" ?  <DialogTitle id="responsive-dialog-title" className="error">{statusApi}</DialogTitle>: 
           <DialogTitle id="responsive-dialog-title" className="success">{statusApi}</DialogTitle>}
         
          <DialogContent>
          {statusApi === "Error" ? 
            <Typography color="secondary" variant="inherit" align="center" component="span" gutterBottom>
              {message}
            </Typography>: 
            <Typography color="primary" variant="inherit" align="center" component="span" gutterBottom>
            {message}
          </Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus={true}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  return [showDialog, ErrorDialogComponent]
}
export default useErrorDialog