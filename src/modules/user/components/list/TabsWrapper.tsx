import { Tabs } from '@mantine/core'
import { UsersTabEnum } from 'user/models'

import { AccountsList } from './AccountsList'
import { CharactersList } from './CharactersList'

import classes from './../Components.module.css'

export function TabsWrapper() {
  return (
    <Tabs
      className={'col-span-12 row-span-3 lg:row-span-2 lg:col-span-9'}
      classNames={{ tab: classes.usersTabItemLight }}
      color={'violet'}
      defaultValue={UsersTabEnum.ACCOUNTS}
      radius={'md'}
      variant={'pills'}
    >
      <Tabs.List className={'flex gap-4 mb-4'}>
        <Tabs.Tab className={'px-8 py-4'} value={UsersTabEnum.ACCOUNTS}>
          {'Konta użytkowników'}
        </Tabs.Tab>
        <Tabs.Tab className={'px-8 py-4'} value={UsersTabEnum.CHARACTERS}>
          {'Postacie użytkowników'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={UsersTabEnum.ACCOUNTS}>
        <AccountsList />
      </Tabs.Panel>
      <Tabs.Panel value={UsersTabEnum.CHARACTERS}>
        <CharactersList />
      </Tabs.Panel>
    </Tabs>
  )
}
