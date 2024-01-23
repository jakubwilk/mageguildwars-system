'use client'

import { Modal } from '@mantine/core'

import LoginForm from './LoginForm'

interface IProps {
  handleCloseModal: () => void
}

const LoginModal = ({ handleCloseModal }: IProps) => {
  return (
    <Modal opened onClose={handleCloseModal} title={'Logowanie'}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
