import { useMemo } from 'react'
import { useAuthContext } from '@auth'
import { createStyles, Tabs } from '@mantine/core'
import { clsx } from 'clsx'
import { isNil } from 'lodash'

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

  console.log(isDataLoading)

  return (
    <Tabs orientation={'vertical'} radius={'md'} variant={'pills'} defaultValue={UserTabs.SETTINGS} className={clsx('mt-8', classes.tabs)}>
      <Tabs.List className={'mr-4'}>
        <img src={'https://i.imgur.com/6YnOpwt.png'} alt={'Vincent'} className={clsx('rounded-lg mb-4 mx-auto', classes.avatar)} />
        <Tabs.Tab value={UserTabs.SETTINGS}>{'Konto'}</Tabs.Tab>
        <Tabs.Tab value={`${UserTabs.PROFILE}_0`}>{'Vincent'}</Tabs.Tab>
        <Tabs.Tab value={`${UserTabs.PROFILE}_1`}>{'Ryu'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={UserTabs.SETTINGS}>
        <p>{'Ustawienia konta'}</p>
      </Tabs.Panel>
      <Tabs.Panel value={`${UserTabs.PROFILE}_0`}>
        <p>{'Profil Vincent'}</p>
      </Tabs.Panel>
      <Tabs.Panel value={`${UserTabs.PROFILE}_1`}>
        <p>{'Profil Ryu'}</p>
      </Tabs.Panel>
    </Tabs>
  )
}

export default UserSettingsContent
