import { Text, Title } from '@mantine/core'
import clsx from 'clsx'

import '@mantine/core/styles/Title.layer.css'
import classes from './Layout.module.css'

export function EditUserHeader() {
  return (
    <div className={clsx('p-8 col-span-full rounded-md', classes.editUserHeader)}>
      <Title className={clsx('break-words', classes.editUserHeaderTitle)} order={1}>
        {'Konto o adresie: '}
        <Text
          className={clsx(
            'py-1 px-4 inline-block rounded-md',
            classes.editUserHeaderTitleText,
          )}
        >
          {'vincent@mageguildwars.pl'}
        </Text>
      </Title>
      <Text className={clsx('pt-2', classes.editUserHeaderText)}>
        {
          'Zakładka nie jest widoczna dla innych użytkowników, żadne dane nie zostały udostępnione'
        }
      </Text>
    </div>
  )
}
