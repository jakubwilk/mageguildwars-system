import { Modal } from 'common/components'

interface IProps {
  slug: string
  isOpen: boolean
  handleClose: () => void
}

export function ActiveAccountModal({ slug, isOpen, handleClose }: IProps) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen} title={'Aktywuj konto'}>
      <p>{'dupa'}</p>
    </Modal>
  )
}
