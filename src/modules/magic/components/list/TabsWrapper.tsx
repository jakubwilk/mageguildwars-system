import { Tabs } from '@mantine/core'
import { MagicTabEnum } from 'magic/models'

import classes from './../Components.module.css'

export function TabsWrapper() {
  return (
    <Tabs
      className={'col-span-12 row-span-3 lg:row-span-2 lg:col-span-9'}
      classNames={{ tab: classes.magicTabItemLight }}
      color={'violet'}
      defaultValue={MagicTabEnum.SYSTEM}
      radius={'md'}
      variant={'pills'}
    >
      <Tabs.List className={'flex gap-4 mb-4'}>
        <Tabs.Tab className={'px-8 py-4'} value={MagicTabEnum.SYSTEM}>
          {'Magie systemowe'}
        </Tabs.Tab>
        <Tabs.Tab className={'px-8 py-4'} value={MagicTabEnum.USERS}>
          {'Magie użytkowników'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={MagicTabEnum.SYSTEM}>
        <div>{'systemowe'}</div>
      </Tabs.Panel>
      <Tabs.Panel value={MagicTabEnum.USERS}>
        <div>{'użytkowe'}</div>
      </Tabs.Panel>
    </Tabs>
  )
}
