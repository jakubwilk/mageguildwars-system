import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoadingOverlay, Tabs } from '@mantine/core'
import { UserSettingsTabEnum } from 'user/models'

import { EditUserEmailForm } from './EditUserEmailForm'
import { EditUserPasswordForm } from './EditUserPasswordForm'
import { UserInformation } from './UserInformation'

import classes from './../Components.module.css'

export function SettingsModalContent() {
  const { t } = useTranslation()
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
        className={'relative mt-1'}
        defaultValue={tab}
        onChange={(value) => handleChangeTab(value as UserSettingsTabEnum)}
        radius={'md'}
        variant={'pills'}
      >
        <Tabs.List className={'gap-4 mb-4'}>
          <Tabs.Tab className={classes.tabItem} value={UserSettingsTabEnum.CHANGE_EMAIL}>
            {t('user:modal.tab.email')}
          </Tabs.Tab>
          <Tabs.Tab
            className={classes.tabItem}
            value={UserSettingsTabEnum.CHANGE_PASSWORD}
          >
            {t('user:modal.tab.password')}
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabItem} value={UserSettingsTabEnum.INFORMATION}>
            {t('user:modal.tab.info')}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={UserSettingsTabEnum.CHANGE_EMAIL}>
          <EditUserEmailForm setisVisible={setisVisible} />
        </Tabs.Panel>
        <Tabs.Panel value={UserSettingsTabEnum.CHANGE_PASSWORD}>
          <EditUserPasswordForm setisVisible={setisVisible} />
        </Tabs.Panel>
        <Tabs.Panel value={UserSettingsTabEnum.INFORMATION}>
          <UserInformation />
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
