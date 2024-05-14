import { useCallback, useMemo, useState } from 'react'

export function useModal() {
  const [open, setOpen] = useState(false)

  const isOpen = useMemo(() => open, [open])

  const handleClose = useCallback(() => setOpen(false), [])

  const handleOpen = useCallback(() => setOpen(true), [])

  return { isOpen, handleOpen, handleClose }
}
