import { Modal } from 'common/components'

interface IProps {
  slug: string
  isOpen: boolean
  handleClose: () => void
}

export function EditAccountModal({ slug, isOpen, handleClose }: IProps) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen} title={'Edytuj użytkownika'}>
      <p>{'dupa2'}</p>
    </Modal>
  )
}
