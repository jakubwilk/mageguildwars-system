import { useCallback } from 'react'
import { ActionIcon, Badge, Card, Group, List, Text, Tooltip } from '@mantine/core'
import {
  IconAlertCircle,
  IconAlertCircleOff,
  IconCheck,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react'
import { IUsersListItem } from 'user/models'
import { userBooleanColor, userGroupColor, userGroupName } from 'user/utils'

import { UserInformationItem } from '../settings'

import classes from './../Components.module.css'

interface IProps {
  item: IUsersListItem
}

export function ListItem({ item }: IProps) {
  const { id, slug, registerDate, group, isBlocked, isBanned, characters } = item

  const getBooleanColor = useCallback(
    (value: boolean) => userBooleanColor.get(value) || '',
    [],
  )

  return (
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
      <div className={'flex justify-end items-center mt-4 gap-4'}>
        {isBlocked && (
          <Tooltip color={'dark'} label={'Aktywuj'} position={'bottom'}>
            <ActionIcon variant={'default'}>
              <IconCheck stroke={1.5} style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Tooltip>
        )}
        {isBanned && !isBlocked && (
          <Tooltip color={'dark'} label={'Odbanuj'} position={'bottom'}>
            <ActionIcon variant={'default'}>
              <IconAlertCircleOff stroke={1.5} style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Tooltip>
        )}
        {!isBlocked && !isBanned && (
          <Tooltip color={'dark'} label={'Zbanuj'} position={'bottom'}>
            <ActionIcon variant={'default'}>
              <IconAlertCircle stroke={1.5} style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Tooltip>
        )}
        <Tooltip color={'dark'} label={'Edytuj'} position={'bottom'}>
          <ActionIcon variant={'default'}>
            <IconPencil stroke={1.5} style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
        </Tooltip>
        <Tooltip color={'dark'} label={'Usuń'} position={'bottom'}>
          <ActionIcon variant={'default'}>
            <IconTrash stroke={1.5} style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
        </Tooltip>
      </div>
    </Card>
  )
}
