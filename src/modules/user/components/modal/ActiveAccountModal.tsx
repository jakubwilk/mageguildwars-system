import { useCallback } from 'react'
import { Highlight } from '@mantine/core'
import clsx from 'clsx'
import { Button, Modal } from 'common/components'
import { useNotifications } from 'common/hooks'
import { useActivateAccountMutation } from 'user/api'

import classes from './../Components.module.css'

interface IProps {
  slug: string
  isOpen: boolean
  handleClose: () => void
}

export function ActiveAccountModal({ slug, isOpen, handleClose }: IProps) {
  const { mutate: activateAccount, isPending } = useActivateAccountMutation()
  const { showNotificationSuccess, showNotificationError } = useNotifications()

  const handleActivateAccount = useCallback(
    () =>
      activateAccount(slug, {
        onSuccess: () => {
          showNotificationSuccess({ message: 'Konto użytkownika zostało aktywowane' })
          handleClose()
        },
        onError: () => {
          showNotificationError({
            message: 'Wystapił problem z aktywacją konta użytkownika',
          })
        },
      }),
    [activateAccount, handleClose, showNotificationError, showNotificationSuccess, slug],
  )

  return (
    <Modal handleClose={handleClose} isOpen={isOpen} size={'lg'} title={'Aktywuj konto'}>
      <Highlight
        className={clsx('text-center', classes.modalText)}
        highlight={slug}
        highlightStyles={{
          backgroundImage:
            'linear-gradient(45deg, var(--mantine-color-violet-5), var(--mantine-color-grape-5))',
          fontWeight: 700,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >{`Czy na pewno chcesz aktywowac konto użytkownika o powiązanej nazwie: ${slug}? Po tej akcji użytkownik będzie mógł aktywnie korzystać z systemu jako pełnoprawny gracz`}</Highlight>
      <div className={'flex items-center justify-end gap-4 mt-6'}>
        <Button loading={isPending} onClick={handleActivateAccount} type={'button'}>
          {'Aktywuj'}
        </Button>
        <Button
          className={'font-normal'}
          onClick={handleClose}
          type={'button'}
          variant={'default'}
        >
          {'Anuluj'}
        </Button>
      </div>
    </Modal>
  )
}
