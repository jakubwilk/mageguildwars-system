import { useCallback, useState } from 'react'
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

import {
  ActiveAccountModal,
  BanOrUnbanAccountModal,
  DeleteAccountModal,
  EditAccountModal,
} from '../modal'
import { UserInformationItem } from '../settings'

import classes from './../Components.module.css'

interface IProps {
  item: IUsersListItem
}

export function ListItem({ item }: IProps) {
  const { id, slug, registerDate, group, isBlocked, isBanned, characters } = item
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)
  const [isBanModalOpen, setIsBanModalOpen] = useState(false)
  const [isUnbanModalOpen, setIsUnbanModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const getBooleanColor = useCallback(
    (value: boolean) => userBooleanColor.get(value) || '',
    [],
  )

  const handleToggleActiveModal = useCallback(
    () => setIsActiveModalOpen(!isActiveModalOpen),
    [isActiveModalOpen],
  )

  const handleToggleBanModal = useCallback(
    () => setIsBanModalOpen(!isBanModalOpen),
    [isBanModalOpen],
  )

  const handleToggleUnbanModal = useCallback(
    () => setIsUnbanModalOpen(!isUnbanModalOpen),
    [isUnbanModalOpen],
  )

  const handleToggleEditModal = useCallback(
    () => setIsEditModalOpen(isEditModalOpen),
    [isEditModalOpen],
  )

  const handleToggleDeleteModal = useCallback(
    () => setIsDeleteModalOpen(isDeleteModalOpen),
    [isDeleteModalOpen],
  )

  return (
    <>
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
        <div className={'flex justify-end items-center mt-4 gap-2'}>
          {isBlocked && (
            <Tooltip color={'dark'} label={'Aktywuj'} position={'bottom'}>
              <ActionIcon onClick={handleToggleActiveModal} variant={'default'}>
                <IconCheck stroke={1.5} style={{ width: '70%', height: '70%' }} />
              </ActionIcon>
            </Tooltip>
          )}
          {isBanned && !isBlocked && (
            <Tooltip color={'dark'} label={'Odbanuj'} position={'bottom'}>
              <ActionIcon onClick={handleToggleUnbanModal} variant={'default'}>
                <IconAlertCircleOff
                  stroke={1.5}
                  style={{ width: '70%', height: '70%' }}
                />
              </ActionIcon>
            </Tooltip>
          )}
          {!isBlocked && !isBanned && (
            <Tooltip color={'dark'} label={'Zbanuj'} position={'bottom'}>
              <ActionIcon onClick={handleToggleBanModal} variant={'default'}>
                <IconAlertCircle stroke={1.5} style={{ width: '70%', height: '70%' }} />
              </ActionIcon>
            </Tooltip>
          )}
          <Tooltip color={'dark'} label={'Edytuj'} position={'bottom'}>
            <ActionIcon onClick={handleToggleEditModal} variant={'default'}>
              <IconPencil stroke={1.5} style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Tooltip>
          <Tooltip color={'dark'} label={'Usuń'} position={'bottom'}>
            <ActionIcon onClick={handleToggleDeleteModal} variant={'default'}>
              <IconTrash stroke={1.5} style={{ width: '70%', height: '70%' }} />
            </ActionIcon>
          </Tooltip>
        </div>
      </Card>
      {isActiveModalOpen && (
        <ActiveAccountModal
          handleClose={handleToggleActiveModal}
          isOpen={isActiveModalOpen}
        />
      )}
      {isBanModalOpen && (
        <BanOrUnbanAccountModal
          handleClose={handleToggleBanModal}
          isOpen={isBanModalOpen}
        />
      )}
      {isUnbanModalOpen && (
        <BanOrUnbanAccountModal
          handleClose={handleToggleUnbanModal}
          hasBan
          isOpen={isUnbanModalOpen}
        />
      )}
      {isEditModalOpen && (
        <EditAccountModal handleClose={handleToggleEditModal} isOpen={isEditModalOpen} />
      )}
      {isDeleteModalOpen && (
        <DeleteAccountModal
          handleClose={handleToggleDeleteModal}
          isOpen={isDeleteModalOpen}
        />
      )}
    </>
  )
}
