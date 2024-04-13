import { useCallback, useState } from 'react'
import { LoadingOverlay, Tabs } from '@mantine/core'
import { useResource } from 'resource/hooks'

import { UserSettingsTabEnum } from '../models'

import { EditUserEmailForm } from './EditUserEmailForm'

import classes from './Components.module.css'

export function SettingsModalContent() {
  const { getResource } = useResource('USER')
  const [tab, setTab] = useState<UserSettingsTabEnum>(UserSettingsTabEnum.CHANGE_EMAIL)
  const [isVisible, setisVisible] = useState(false)

  const handleChangeTab = useCallback((value: UserSettingsTabEnum) => setTab(value), [])

  return (
    <>
      <LoadingOverlay
        overlayProps={{ radius: 'sm', blur: 2 }}
        visible={isVisible}
        zIndex={1000}
      />
      <Tabs
        className={'relative'}
        defaultValue={tab}
        onChange={(value) => handleChangeTab(value as UserSettingsTabEnum)}
        radius={'md'}
        variant={'pills'}
      >
        <Tabs.List className={'gap-4 mb-4'}>
          <Tabs.Tab className={classes.tabItem} value={UserSettingsTabEnum.CHANGE_EMAIL}>
            {getResource('MODAL_SETTINGS_CHANGE_EMAIL_TAB_TEXT')}
          </Tabs.Tab>
          <Tabs.Tab
            className={classes.tabItem}
            value={UserSettingsTabEnum.CHANGE_PASSWORD}
          >
            {getResource('MODAL_SETTINGS_CHANGE_PASSWORD_TAB_TEXT')}
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabItem} value={UserSettingsTabEnum.INFORMATION}>
            {getResource('MODAL_SETTINGS_INFORMATION_TAB_TEXT')}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={UserSettingsTabEnum.CHANGE_EMAIL}>
          <EditUserEmailForm setisVisible={setisVisible} />
        </Tabs.Panel>
        <Tabs.Panel value={UserSettingsTabEnum.CHANGE_PASSWORD}>
          {'password form'}
        </Tabs.Panel>
        <Tabs.Panel value={UserSettingsTabEnum.INFORMATION}>{'information'}</Tabs.Panel>
      </Tabs>
    </>
  )
}
