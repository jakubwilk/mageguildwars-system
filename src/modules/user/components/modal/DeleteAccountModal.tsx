import { useCallback } from 'react'
import { Highlight, Text } from '@mantine/core'
import clsx from 'clsx'
import { Button, Modal } from 'common/components'
import { useNotifications } from 'common/hooks'
import { useDeleteAccountMutation } from 'user/api'

import classes from './../Components.module.css'

interface IProps {
  slug: string
  isOpen: boolean
  handleClose: () => void
}

export function DeleteAccountModal({ slug, isOpen, handleClose }: IProps) {
  const { mutate: deleteAccount, isPending } = useDeleteAccountMutation()
  const { showNotificationSuccess, showNotificationError } = useNotifications()

  const handleDeleteAccount = useCallback(
    () =>
      deleteAccount(slug, {
        onSuccess: () => {
          showNotificationSuccess({
            message: 'Dane użytkownika zostały pomyslnie poddane anonimizacji',
          })
          handleClose()
        },
        onError: () => {
          showNotificationError({
            message: 'Wystapił problem podczas anonimizacji danych użytkownika',
          })
        },
      }),
    [deleteAccount, handleClose, showNotificationError, showNotificationSuccess, slug],
  )

  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      size={'lg'}
      title={`Usuń użytkownika`}
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
      >{`Czy na pewno chcesz usunąc użytkownika o nazwie powiązanej: ${slug}? Procesu nie będzie dało się cofnąć`}</Highlight>
      <Text
        className={clsx('text-center mt-2', classes.modalText, classes.modalInfoText)}
      >
        {
          'Dane użytkownika zostaną bezpowrotnie poddane anonimizacji, dzięki czemu nie będzie możliwe ponowne zidentyfikowanie konta'
        }
      </Text>
      <div className={'flex items-center justify-end gap-4 mt-6'}>
        <Button
          color={'red'}
          loading={isPending}
          onClick={handleDeleteAccount}
          type={'button'}
        >
          {'Usuń'}
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
