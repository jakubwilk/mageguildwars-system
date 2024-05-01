import { useCallback, useMemo } from 'react'
import { NotificationData, notifications } from '@mantine/notifications'
import { INotificationConfig } from 'common/models'
import { useResource } from 'resource/hooks'

export function useNotifications() {
  const { getResource } = useResource('NOTIFICATION')

  const config: NotificationData = useMemo(
    () => ({
      title: '',
      message: '',
      timeout: 5000,
      position: 'bottom-right',
      classNames: {
        title: 'text-base',
        description: 'text-base',
      },
    }),
    [],
  )

  const showNotificationSuccess = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        ...config,
        color: 'green',
        title: getResource('NOTIFICATION_SUCCESS_TITLE'),
        ...options,
      })
    },
    [config, getResource],
  )

  const showNotificationError = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        ...config,
        color: 'red',
        ...options,
      })
    },
    [config],
  )

  const showNotificationInfo = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        ...config,
        color: 'blue',
        timeout: 10000,
        ...options,
      })
    },
    [config],
  )

  return { showNotificationSuccess, showNotificationError, showNotificationInfo }
}
