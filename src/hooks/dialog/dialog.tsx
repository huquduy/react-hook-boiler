import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import React, { FC, ReactNode, useState } from "react"

type TCallback = () => void
type HookDialog = (status: boolean) => [TCallback, React.FC<{ children?: ReactNode, title?: string }>]

const useDialog: HookDialog = (status) => {
  const [isOpened, setIsOpened] = useState(status)

  const handleClose = () => setIsOpened(false)

  const showDialog = () => setIsOpened(true)

  const DialogComponent: FC<{ children?: ReactNode, title?: string }> = ({
    children, title = 'Akuhoki message'
  }) => (
    <div>
      <Dialog
        open={Boolean(isOpened)}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus={true}>
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  return [ showDialog, DialogComponent ]
}
export default useDialog