import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Text, Title, Tooltip } from '@mantine/core'
import clsx from 'clsx'
import { Section } from 'common/components'

import classes from './Dashboard.module.css'

export function Statistics() {
  const renderItem = useCallback(
    (value: string | number, label: string, link?: string) => {
      return (
        <div
          className={'flex flex-col items-center justify-center truncate overflow-hidden'}
        >
          {link ? (
            <Tooltip color={'dark'} label={'Mesmer the Imapler from Elden Ring DLC'}>
              <Link
                className={clsx(
                  'block w-full truncate text-center',
                  classes.statisticsLink,
                )}
                to={link}
              >
                {'Mesmer the Imapler from Elden Ring DLC'}
              </Link>
            </Tooltip>
          ) : (
            <Text className={classes.statisticsValue}>{value}</Text>
          )}
          <Title className={clsx('text-center', classes.statisticsLabel)}>{label}</Title>
        </div>
      )
    },
    [],
  )

  return (
    <Section className={'col-span-12 row-span-1 h-full'}>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-4 rounded-xl'
        }
      >
        {renderItem(123, 'Wpisów użytkowników')}
        {renderItem(17, 'Mistrzów gry')}
        {renderItem(69, 'Utworzone postacie')}
        {renderItem('Marvecc', 'Najnowsza postać', 'https://www.google.com')}
      </div>
    </Section>
  )
}
