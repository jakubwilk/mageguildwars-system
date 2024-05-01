import { useCallback, useMemo } from 'react'
import { NotificationData, notifications } from '@mantine/notifications'
import { INotificationConfig } from 'common/models'

export function useNotifications() {
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
        color: 'green',
        ...config,
        ...options,
      })
    },
    [config],
  )

  const showNotificationError = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        color: 'red',
        ...config,
        ...options,
      })
    },
    [config],
  )

  const showNotificationInfo = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        color: 'blue',
        timeout: 10000,
        ...config,
        ...options,
      })
    },
    [config],
  )

  return { showNotificationSuccess, showNotificationError, showNotificationInfo }
}
