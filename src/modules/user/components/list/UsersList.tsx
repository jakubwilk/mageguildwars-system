import { useCallback } from 'react'
import { Badge, Card, Group, List, Text } from '@mantine/core'
import { UserGroupEnum } from 'user/models'
import { userBooleanColor, userGroupColor, userGroupName } from 'user/utils'

import { UserInformationItem } from '../settings'

import classes from './../Components.module.css'

export function UsersList() {
  const data: Array<{
    id: number
    slug: string
    registerDate: Date
    group: UserGroupEnum
    characters: number
    isBlocked: boolean
    isBanned: boolean
  }> = [
    {
      id: 1,
      slug: 'mgw-vincent',
      registerDate: new Date(),
      group: UserGroupEnum.ROOT,
      characters: 1,
      isBlocked: false,
      isBanned: false,
    },
    {
      id: 2,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
    },
    {
      id: 3,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
    },
    {
      id: 4,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
    },
    {
      id: 5,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
    },
    {
      id: 6,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
    },
    {
      id: 7,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
    },
    {
      id: 8,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
    },
    {
      id: 9,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
    },
    {
      id: 10,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
    },
  ]

  const getBooleanColor = useCallback(
    (value: boolean) => userBooleanColor.get(value) || '',
    [],
  )

  return (
    <section
      className={
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-12 row-span-3 lg:row-span-2 lg:col-span-9'
      }
    >
      {data.map(({ id, slug, registerDate, group, characters, isBlocked, isBanned }) => (
        <Card key={id} padding={'lg'} radius={'md'}>
          <Group className={'w-full gap-4'} justify={'space-between'}>
            <Text>{slug}</Text>
            <Badge
              className={classes.badge}
              color={userGroupColor.get(group)}
              radius={'sm'}
              size={'lg'}
              variant={'light'}
            >
              {userGroupName.get(group)}
            </Badge>
          </Group>
          <List center className={'mt-4 list-none'} size={'sm'} spacing={'xs'}>
            <UserInformationItem
              badgeColor={'gray'}
              hasSmallLabel
              label={'Data rejestracji: '}
              value={registerDate}
            />
            <UserInformationItem
              badgeColor={getBooleanColor(isBlocked)}
              hasSmallLabel
              label={'Konto nieaktywowane: '}
              value={isBlocked}
            />
            <UserInformationItem
              badgeColor={getBooleanColor(isBanned)}
              hasSmallLabel
              label={'Konto zbanowane: '}
              value={isBanned}
            />
            <UserInformationItem
              badgeColor={'gray'}
              hasSmallLabel
              label={'Ilość postaci: '}
              value={characters.toString()}
            />
          </List>
        </Card>
      ))}
    </section>
  )
}
