import { Modal } from 'common/components'

interface IProps {
  hasBan?: boolean
  isOpen: boolean
  handleClose: () => void
}

export function BanOrUnbanAccountModal({ hasBan = false, isOpen, handleClose }: IProps) {
  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      title={hasBan ? 'Odbanuj użytkownika' : 'Zbanuj użytkownika'}
    >
      <p>{'dupa'}</p>
    </Modal>
  )
}
