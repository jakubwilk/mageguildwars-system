import { ReactNode, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '@auth'
import { BooleanValue } from '@common'
import { createStyles, List, Text } from '@mantine/core'
import { convertUserGroupToText } from '@user'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { isNil } from 'lodash'

const useStyles = createStyles((theme) => ({
  listItem: {
    '& > .mantine-List-itemWrapper > span': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  listTitle: {
    color: theme.colors.gray[7],
  },
  listValue: {
    color: theme.colors.dark[1],
  },
}))

function UserDetailsSection() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { user } = useAuthContext()

  const parseDate = useCallback((date: Date | undefined) => {
    if (isNil(date)) {
      return ''
    }

    const defaultDate = new Date(date)
    return format(defaultDate, 'dd MMMM yyyy', { locale: pl })
  }, [])

  const renderListItem = useCallback(
    (title: string, value?: string | number | null, element?: ReactNode) => {
      return (
        <List.Item className={clsx('mb-1', classes.listItem)}>
          <Text className={clsx('mr-1', classes.listTitle)}>{title}</Text>
          {value ? <Text className={classes.listValue}>{value}</Text> : element}
        </List.Item>
      )
    },
    [classes.listItem, classes.listTitle, classes.listValue]
  )

  return (
    <List className={clsx('list-none')}>
      {renderListItem(t('user:fields.registerDate'), parseDate(user?.createdAt))}
      {renderListItem(t('user:fields.updateDate'), parseDate(user?.updatedAt))}
      {renderListItem(t('user:fields.group'), convertUserGroupToText(user?.group))}
      {renderListItem(t('user:fields.isAccountActive'), null, <BooleanValue value={user?.isActive} isGreenRedBadge />)}
      {renderListItem(t('user:fields.isAccountLocked'), null, <BooleanValue value={user?.isLocked} isGreenRedBadge />)}
      {renderListItem(
        t('user:fields.isProfileCreationActive'),
        null,
        <BooleanValue value={user?.isCreateProfileEnabled} isGreenRedBadge />
      )}
      {renderListItem(
        t('user:fields.isGameMasterProfileCreationActive'),
        null,
        <BooleanValue value={user?.isGameMasterProfileEnabled} isGreenRedBadge />
      )}
    </List>
  )
}

export default UserDetailsSection
