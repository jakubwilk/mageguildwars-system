import { useContext } from 'react'

import { DialogContext } from '../context'
import { DialogContextType } from '../model'

function useDialog() {
  const { isOpen, handleOpenDialog, handleCloseDialog } = useContext<DialogContextType>(DialogContext)

  return { isOpen, handleOpenDialog, handleCloseDialog }
}

export default useDialog
