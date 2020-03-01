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

type TCallback = (msg: string) => void
type HookDialog = (status: boolean) => [TCallback, React.FC<{ children?: ReactNode, title?: string }>]

const useErrorDialog: HookDialog = (status) => {
  const [isOpened, setIsOpened] = useState(status)
  const [message, setMessage] = useState('')

  const handleClose = () => {
    setIsOpened(false)
    setMessage('')
  }

  const showDialog = (msg: string) => {
    setMessage(msg)
    setIsOpened(true)

  }

  const ErrorDialogComponent: FC<{ children?: ReactNode, title?: string }> = ({
    children, title = 'Error'
  }) => (
      <div className="dialog">
        <Dialog
          open={Boolean(isOpened)}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <Typography color="secondary" variant="inherit" align="center" component="span" gutterBottom>
              {message}
            </Typography>
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