import { Modal } from 'common/components'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

export function DeleteAccountModal({ isOpen, handleClose }: IProps) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen} title={'Usuń użytkownika'}>
      <p>{'dupa2'}</p>
    </Modal>
  )
}
