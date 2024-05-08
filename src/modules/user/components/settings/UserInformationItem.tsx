import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Badge, List, rem, Text, ThemeIcon } from '@mantine/core'
import { Icon, IconProps } from '@tabler/icons-react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { isBoolean, isDate, isString } from 'lodash'
import { useResource } from 'resource/hooks'

import 'dayjs/locale/pl'

import classes from './../Components.module.css'

interface IProps {
  label: string
  value: string | Date | boolean
  IconComponent?: ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>
  badgeColor: string
  hasSmallLabel?: boolean
}

export function UserInformationItem({
  label,
  value,
  IconComponent,
  badgeColor = 'gray',
  hasSmallLabel,
}: IProps) {
  const { getResource } = useResource('COMMON')

  const renderBadgeValue = (value: string | Date | boolean): string => {
    if (isDate(value)) {
      return dayjs(value).format('DD MMM YYYY, HH:mm')
    }

    if (isBoolean(value)) {
      return value ? getResource('VALUE_YES_TEXT') : getResource('VALUE_NO_TEXT')
    }

    if (isString(value)) {
      return value
    }

    return '-'
  }

  return (
    <List.Item
      {...(IconComponent && {
        icon: (
          <ThemeIcon radius={'xl'} size={24}>
            <IconComponent style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        ),
      })}
    >
      <Text className={clsx('inline-block', hasSmallLabel ? classes.badgeLabel : '')}>
        {label}
      </Text>
      <Badge
        className={clsx('ml-2', classes.badge)}
        color={badgeColor}
        radius={'sm'}
        size={'lg'}
        variant={'light'}
      >
        {renderBadgeValue(value)}
      </Badge>
    </List.Item>
  )
}
