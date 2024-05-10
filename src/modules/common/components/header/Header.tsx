import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ActionIcon, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLayoutSidebarRightExpand } from '@tabler/icons-react'
import { LoginForm, RegisterForm } from 'auth/components'
import { useDispatch, useSelector } from 'config'
import { SettingsModalContent } from 'user/components'

import { closeLoginModal, closeRegisterModal, closeUserSettingsModal } from '../../store'
import { SidebarMenu } from '../menu/SidebarMenu.tsx'
import { Modal } from '../modal/Modal.tsx'

import classes from './Header.module.css'

export function Header() {
  const { t } = useTranslation()
  const [opened, { open: handleOpenSidebar, close: handleCloseSidebar }] =
    useDisclosure(false)
  const dispatch = useDispatch()
  const { isLoginOpen, isRegisterOpen, isUserSettingsOpen } = useSelector(
    (state) => state.modal,
  )

  const handleCloseLoginModal = useCallback(() => {
    dispatch(closeLoginModal())
  }, [dispatch])

  const handleCloseRegisterModal = useCallback(() => {
    dispatch(closeRegisterModal())
  }, [dispatch])

  const handleCloseUserSettingsModal = useCallback(() => {
    dispatch(closeUserSettingsModal())
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
        title={t('auth:modal.login-title')}
      >
        <LoginForm />
      </Modal>
      <Modal
        handleClose={handleCloseRegisterModal}
        isOpen={isRegisterOpen}
        title={t('auth:modal.register-title')}
      >
        <RegisterForm />
      </Modal>
      <Modal
        handleClose={handleCloseUserSettingsModal}
        isOpen={isUserSettingsOpen}
        size={'lg'}
        title={t('auth:modal.settings-title')}
      >
        <SettingsModalContent />
      </Modal>
    </>
  )
}
