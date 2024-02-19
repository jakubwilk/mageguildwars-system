'use client'

import { Modal } from '@mantine/core'
import { useLocale } from '@modules/locale'

import LoginForm from './LoginForm'

interface IProps {
  handleCloseModal: () => void
}

const LoginModal = ({ handleCloseModal }: IProps) => {
  const { translateByHook } = useLocale('auth')

  return (
    <Modal opened onClose={handleCloseModal} title={translateByHook('modal.title')}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
