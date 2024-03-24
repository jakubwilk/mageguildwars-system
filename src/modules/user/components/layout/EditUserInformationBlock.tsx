import { useCallback } from 'react'
import { Badge, Box, List, rem, ThemeIcon, Title } from '@mantine/core'
import {
  IconCalendar,
  IconInfoCircle,
  IconMap,
  IconUser,
  IconUsers,
} from '@tabler/icons-react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { isBoolean, isDate } from 'lodash'

import { useResources } from '../../../resources/hooks'
import { getUserGroupColor } from '../../utils'

import '@mantine/core/styles/Title.layer.css'
import classes from './Layout.module.css'

export function EditUserInformationBlock() {
  const { getResource } = useResources('USER')
  const { getResource: getCommonResource } = useResources('COMMON')

  const getBooleanValue = useCallback(
    (value: boolean) => {
      return getCommonResource(value ? 'YES_TEXT' : 'NO_TEXT')
    },
    [getCommonResource],
  )

  const setBooleanColor = useCallback((value: boolean) => (value ? 'green' : 'red'), [])

  const renderBadge = useCallback(
    (value: string | boolean | Date, customColor?: string) => {
      let valueBadge

      if (isBoolean(value)) {
        valueBadge = getBooleanValue(value)
      } else if (isDate(value)) {
        valueBadge = value.toString()
      } else {
        valueBadge = value
      }

      return (
        <Badge
          className={'ml-2'}
          classNames={{ label: classes.editUserBlockBadgeLabel }}
          color={customColor || 'gray'}
          radius={'sm'}
          size={'lg'}
          variant={'light'}
        >
          {valueBadge}
        </Badge>
      )
    },
    [getBooleanValue],
  )

  const formatUserDate = useCallback((date: Date): string => {
    const transformDate = date.toISOString()

    return dayjs(transformDate).format('DD MMMM YYYY')
  }, [])

  return (
    <Box
      className={'md:col-span-2 2xl:col-span-1 rounded-md overflow-hidden'}
      pos={'relative'}
    >
      <section className={clsx('p-8 rounded-md', classes.editUserBlock)}>
        <Title
          className={clsx(
            'flex items-center mb-8 break-words',
            classes.editUserBlockTitle,
          )}
          order={2}
        >
          <IconInfoCircle
            className={clsx('mr-2', classes.editUserBlockTitleIcon)}
            stroke={1.5}
            style={{ height: '18px', width: '18px' }}
          />
          {getResource('EDIT_USER_BLOCK_INFORMATION_TEXT')}
        </Title>
        <List size={'sm'} spacing={'sm'}>
          <List.Item
            icon={
              <ThemeIcon color={'gray'} radius={'xl'} size={24} variant={'light'}>
                <IconCalendar style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {getResource('EDIT_USER_BLOCK_FIELD_CREATED_AT_TEXT')}
            {renderBadge(formatUserDate(new Date()))}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color={'gray'} radius={'xl'} size={24} variant={'light'}>
                <IconCalendar style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {getResource('EDIT_USER_BLOCK_FIELD_UPDATED_AT_TEXT')}
            {renderBadge(formatUserDate(new Date()))}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color={'blue'} radius={'xl'} size={24} variant={'light'}>
                <IconUser style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {getResource('EDIT_USER_BLOCK_FIELD_GROUP_TEXT')}
            {renderBadge('Operator', getUserGroupColor(3))}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon
                color={setBooleanColor(true)}
                radius={'xl'}
                size={24}
                variant={'light'}
              >
                <IconUsers style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {getResource('EDIT_USER_BLOCK_FIELD_CHARACTERS_ENABLED_TEXT')}
            {renderBadge(true)}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon
                color={setBooleanColor(false)}
                radius={'xl'}
                size={24}
                variant={'light'}
              >
                <IconMap style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {getResource('EDIT_USER_BLOCK_FIELD_GAME_MASTER_ENABLED_TEXT')}
            {renderBadge(false)}
          </List.Item>
        </List>
      </section>
    </Box>
  )
}
