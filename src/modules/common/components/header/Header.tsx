import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ActionIcon, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLayoutSidebarRightExpand } from '@tabler/icons-react'

import { useDispatch, useSelector } from '../../../../app/config'
import { LoginForm, RegisterForm } from '../../../auth/components'
import { useResource } from '../../../resource/hooks'
import { closeLoginModal, closeRegisterModal } from '../../store'
import { SidebarMenu } from '../menu/SidebarMenu.tsx'
import { Modal } from '../modal/Modal.tsx'

import classes from './Header.module.css'

export function Header() {
  const { getResource } = useResource('AUTH')
  const [opened, { open: handleOpenSidebar, close: handleCloseSidebar }] =
    useDisclosure(false)
  const dispatch = useDispatch()
  const { isLoginOpen, isRegisterOpen } = useSelector((state) => state.modal)

  const handleCloseLoginModal = useCallback(() => {
    dispatch(closeLoginModal())
  }, [dispatch])

  const handleCloseRegisterModal = useCallback(() => {
    dispatch(closeRegisterModal())
  }, [dispatch])

  return (
    <>
      <header className={'py-8 flex items-center justify-between w-full'}>
        <div className={'mr-4'}>
          <Link className={'block'} to={'/'}>
            <img
              alt={'Mage Guild Wars'}
              src={'https://mageguildwars.pl/images/mgw_modern/logo.png'}
            />
          </Link>
        </div>
        <Tooltip color={'dark'} label={'Otwórz panel boczny'} position={'bottom'}>
          <ActionIcon
            aria-label={'Otwórz panel boczny'}
            className={classes.icon}
            onClick={handleOpenSidebar}
            radius={'xs'}
            size={'xl'}
            variant={'transparent'}
          >
            <IconLayoutSidebarRightExpand
              stroke={1.5}
              style={{ width: '70%', height: '70%' }}
            />
          </ActionIcon>
        </Tooltip>
      </header>
      <SidebarMenu handleCloseSidebar={handleCloseSidebar} isOpen={opened} />
      <Modal
        handleClose={handleCloseLoginModal}
        isOpen={isLoginOpen}
        title={getResource('MODAL_LOGIN_TITLE_TEXT')}
      >
        <LoginForm />
      </Modal>
      <Modal
        handleClose={handleCloseRegisterModal}
        isOpen={isRegisterOpen}
        title={getResource('MODAL_REGISTER_TITLE_TEXT')}
      >
        <RegisterForm />
      </Modal>
    </>
  )
}
