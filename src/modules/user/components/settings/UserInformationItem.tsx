import { Badge, List, rem, ThemeIcon } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { isBoolean, isDate, isString } from 'lodash'
import { useResource } from 'resource/hooks'

import 'dayjs/locale/pl'

import classes from './../Components.module.css'

interface IProps {
  label: string
  value: string | Date | boolean
  IconComponent: (props: TablerIconsProps) => JSX.Element
  badgeColor: string
}

export function UserInformationItem({
  label,
  value,
  IconComponent,
  badgeColor = 'gray',
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
      icon={
        <ThemeIcon radius={'xl'} size={24}>
          <IconComponent style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      {label}
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
