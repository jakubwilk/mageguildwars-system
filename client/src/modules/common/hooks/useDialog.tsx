import { useContext } from 'react'
import { DialogContext, DialogContextType } from '@common'

function useDialog() {
  const { isOpen, handleOpenDialog, handleCloseDialog } = useContext<DialogContextType>(DialogContext)

  return { isOpen, handleOpenDialog, handleCloseDialog }
}

export default useDialog
