'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { Badge, Text } from '@mantine/core'
import { useAuthContext } from '@modules/auth'
import { PageWithNoTitle } from '@modules/common'
import {
  EMPTY_PROFILE,
  ICharacter,
  profileStyles,
  TCharacterGuild,
  useGetUserQuery,
} from '@modules/user'
import { clsx } from 'clsx'
import { first, isEqual, isNil } from 'lodash'

import { getGuildName } from '@/modules/user/utils/user.utils'

interface IProps {
  uid: string
}

const ProfilePage = ({ uid }: IProps) => {
  const { data: userData } = useGetUserQuery(uid, { enabled: !isNil(uid) })
  const { user } = useAuthContext()

  const isUserLogged = useMemo(
    () => isEqual(user?.uid, userData?.uid) && !isNil(user?.uid),
    [user?.uid, userData?.uid],
  )

  console.log('isUserLogged', isUserLogged)
  console.log('userData', userData)
  const mainProfile: ICharacter = useMemo(
    () => first(userData?.profiles) || EMPTY_PROFILE,
    [userData],
  )
  const userGuildField: TCharacterGuild = useMemo(
    () => getGuildName(mainProfile.guild),
    [mainProfile],
  )

  return (
    <PageWithNoTitle>
      <header className={'flex items-center justify-center'}>
        <div
          className={
            'flex items-center justify-center relative overflow-hidden min-w-[280px]'
          }
        >
          <Image
            src={mainProfile.imageUri || 'https://i.imgur.com/IRbWuQR.png'}
            alt={mainProfile.name}
            width={280}
            height={400}
            className={'rounded-xl'}
          />
          <div
            className={clsx(
              'flex flex-col items-center absolute bottom-0 right-0 p-4 rounded-tl-xl rounded-br-xl',
              profileStyles.level,
            )}
          >
            <Text className={profileStyles.levelNumber}>{'23'}</Text>
            <Text className={clsx('uppercase', profileStyles.levelText)}>{'Poziom'}</Text>
          </div>
        </div>
        <div className={'ml-8'}>
          <Badge color={userGuildField.color} size={'xl'} radius={'md'}>
            {userGuildField.name}
          </Badge>
          <Text className={profileStyles.profileName}>{mainProfile.name}</Text>
        </div>
      </header>
    </PageWithNoTitle>
  )
}

export default ProfilePage
