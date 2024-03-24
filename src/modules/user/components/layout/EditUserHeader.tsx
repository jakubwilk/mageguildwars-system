import { Text, Title } from '@mantine/core'
import clsx from 'clsx'

import { useResources } from '../../../resources/hooks'

import '@mantine/core/styles/Title.layer.css'
import classes from './Layout.module.css'

export function EditUserHeader() {
  const { getResource } = useResources('USER')

  return (
    <div className={clsx('p-8 mt-8 col-span-full rounded-md', classes.editUserHeader)}>
      <Title className={clsx('break-words', classes.editUserHeaderTitle)} order={1}>
        {getResource('EDIT_USER_HEADER_ACCOUNT_WITH_TEXT')}
        <Text
          className={clsx(
            'py-1 px-4 inline-block rounded-md',
            classes.editUserHeaderTitleText,
          )}
        >
          {'mgw-vincent'}
        </Text>
      </Title>
      <Text className={clsx('pt-2', classes.editUserHeaderText)}>
        {getResource('EDIT_USER_HEADER_ACCOUNT_DATA_TEXT')}
      </Text>
    </div>
  )
}
