import { createContext, ReactNode, useCallback, useMemo } from 'react'
import { DialogContextType } from '@common'
import { useDisclosure } from '@mantine/hooks'

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  handleOpenDialog: () => {},
  handleCloseDialog: () => {},
})

interface IProps {
  children: ReactNode
}

function DialogContextProvider({ children }: IProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const isOpen = useMemo(() => opened, [opened])
  const handleOpenDialog = useCallback(() => open(), [open])
  const handleCloseDialog = useCallback(() => close(), [close])

  return <DialogContext.Provider value={{ isOpen, handleOpenDialog, handleCloseDialog }}>{children}</DialogContext.Provider>
}

export default DialogContextProvider
