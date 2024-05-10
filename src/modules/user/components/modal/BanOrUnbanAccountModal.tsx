import { useCallback, useMemo } from 'react'
import { Highlight, Text } from '@mantine/core'
import clsx from 'clsx'
import { Button, Modal } from 'common/components'
import { useNotifications } from 'common/hooks'
import { useBanAccountMutation, useUnbanAccountMutation } from 'user/api'

import classes from './../Components.module.css'

interface IProps {
  slug: string
  hasBan?: boolean
  isOpen: boolean
  handleClose: () => void
}

export function BanOrUnbanAccountModal({
  slug,
  hasBan = false,
  isOpen,
  handleClose,
}: IProps) {
  const { mutate: banAccount, isPending: isBanPending } = useBanAccountMutation()
  const { mutate: unbanAccount, isPending: isUnbanPending } = useUnbanAccountMutation()
  const { showNotificationSuccess, showNotificationError } = useNotifications()

  const isPending = useMemo(
    () => isBanPending || isUnbanPending,
    [isBanPending, isUnbanPending],
  )

  const handleBanAccount = useCallback(
    () =>
      banAccount(slug, {
        onSuccess: () => {
          showNotificationSuccess({
            message:
              'Użytkownik został pomyślnie zbanowany. Od tej pory nie może korzystać z serwisu',
          })
          handleClose()
        },
        onError: () => {
          showNotificationError({
            message: 'Wystąpił błąd podczas banowania użytkownika',
          })
        },
      }),
    [banAccount, handleClose, showNotificationError, showNotificationSuccess, slug],
  )

  const handleUnbanAccount = useCallback(
    () =>
      unbanAccount(slug, {
        onSuccess: () => {
          showNotificationSuccess({
            message:
              'Użytkownik został pomyślnie odbanowany. Od tej pory może korzystać z serwisu',
          })
          handleClose()
        },
        onError: () => {
          showNotificationError({
            message: 'Wystąpił błąd podczas odbanowania użytkownika',
          })
        },
      }),
    [handleClose, showNotificationError, showNotificationSuccess, slug, unbanAccount],
  )

  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      size={'lg'}
      title={hasBan ? 'Odbanuj użytkownika' : 'Zbanuj użytkownika'}
    >
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
      >
        {hasBan
          ? `Czy na pewno chcesz anulować bana użytkownika o powiązanej nazwie: ${slug}? Po tej akcji użytkownik będzie mógł aktywnie korzystać z systemu`
          : `Czy na pewno chcesz zbanować konto użytkownika o powiązanej nazwie: ${slug}? Po tej akcji użytkownik będzie miał zablokowany dostęp do wszystkich funkcjonalności aplikacji`}
      </Highlight>
      {!hasBan && (
        <Text
          className={clsx('text-center mt-2', classes.modalText, classes.modalInfoText)}
        >
          {'Użytkownik zostanie zbanowany na czas nieokreślony'}
        </Text>
      )}
      <div className={'flex items-center justify-end gap-4 mt-6'}>
        <Button
          loading={isPending}
          onClick={hasBan ? handleUnbanAccount : handleBanAccount}
          type={'button'}
        >
          {hasBan ? 'Odbanuj użytkownika' : 'Zbanuj użytkownika'}
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
