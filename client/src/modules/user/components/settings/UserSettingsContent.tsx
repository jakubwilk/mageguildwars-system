import { useMemo } from 'react'
import { useAuthContext } from '@auth'
import { createStyles, Skeleton, Tabs } from '@mantine/core'
import { clsx } from 'clsx'
import { isEmpty, isNil } from 'lodash'

import { UserTabs } from '../../models'

const useStyles = createStyles((theme) => ({
  tabs: {
    flexDirection: 'column',
    [`@media screen and (min-width: 720px)`]: {
      flexDirection: 'row',
    },
  },
  avatar: {
    maxWidth: 200,
  },
}))

function UserSettingsContent() {
  const { user } = useAuthContext()
  const { classes } = useStyles()
  const isDataLoading = useMemo(() => isNil(user), [user])
  const profiles = useMemo(() => user?.profiles, [user])
  const hasUserProfiles = useMemo(() => !isNil(profiles) || !isEmpty(profiles), [profiles])

  if (isDataLoading) {
    return (
      <div className={'flex justify-start items-start mt-8'}>
        <div className={'mr-8'}>
          <Skeleton height={320} width={200} radius={'md'} />
        </div>
        <Skeleton height={400} radius={'md'} />
      </div>
    )
  }

  return (
    <Tabs orientation={'vertical'} radius={'md'} variant={'pills'} defaultValue={UserTabs.SETTINGS} className={clsx('mt-8', classes.tabs)}>
      <Tabs.List className={'mr-4'}>
        <img src={'https://i.imgur.com/6YnOpwt.png'} alt={'Vincent'} className={clsx('rounded-lg mb-4 mx-auto', classes.avatar)} />
        <Tabs.Tab value={UserTabs.SETTINGS}>{'Konto'}</Tabs.Tab>
        {hasUserProfiles &&
          profiles?.map(({ id, name }) => (
            <Tabs.Tab key={id} value={`${UserTabs.PROFILE}-${id}`}>
              {name}
            </Tabs.Tab>
          ))}
      </Tabs.List>
      <Tabs.Panel value={UserTabs.SETTINGS}>
        <p>{'Ustawienia konta'}</p>
      </Tabs.Panel>
      {hasUserProfiles &&
        profiles?.map(({ id, name }) => (
          <Tabs.Panel key={id} value={`${UserTabs.PROFILE}-${id}`}>
            <p>{`Profil ${name}`}</p>
          </Tabs.Panel>
        ))}
    </Tabs>
  )
}

export default UserSettingsContent
