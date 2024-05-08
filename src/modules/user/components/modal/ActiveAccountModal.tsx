import { Modal } from 'common/components'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

export function ActiveAccountModal({ isOpen, handleClose }: IProps) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen} title={'Aktywuj konto'}>
      <p>{'dupa'}</p>
    </Modal>
  )
}
