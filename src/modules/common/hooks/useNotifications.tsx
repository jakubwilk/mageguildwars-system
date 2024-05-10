import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NotificationData, notifications } from '@mantine/notifications'
import { INotificationConfig } from 'common/models'

export function useNotifications() {
  const { t } = useTranslation()

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
        title: t('notification:title.success'),
        ...options,
      })
    },
    [config, t],
  )

  const showNotificationError = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        ...config,
        color: 'red',
        title: t('notification:title.error'),
        ...options,
      })
    },
    [config, t],
  )

  const showNotificationInfo = useCallback(
    (options: INotificationConfig) => {
      return notifications.show({
        ...config,
        color: 'blue',
        title: t('notification:title.info'),
        timeout: 10000,
        ...options,
      })
    },
    [config, t],
  )

  return { showNotificationSuccess, showNotificationError, showNotificationInfo }
}
