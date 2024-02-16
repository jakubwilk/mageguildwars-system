import { Link } from 'react-router-dom'
import { Text, Tooltip } from '@mantine/core'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import clsx from 'clsx'

import { RegisterForm } from './RegisterForm.tsx'

import classes from './Register.module.css'

export function RegisterWrapper() {
  return (
    <div
      className={clsx(
        'flex items-end rounded-md h-full w-full min-h-[calc(100vh-32px)] sm:max-w-[400px]',
        classes.wrapper,
      )}
    >
      <div className={'m-8'}>
        <div className={'flex justify-center mb-8'}>
          <img
            alt={'Srebrny napis Mage Guild Wars'}
            src={'https://mageguildwars.pl/images/mgw_modern/logo.png'}
          />
        </div>
        <RegisterForm />
        <div className={'flex justify-center'}>
          <Tooltip color={'gray'} label={'Wróć na stronę główną Mage Guild Wars'}>
            <Link
              className={clsx(
                'flex items-center justify-center mt-8',
                classes.backToHomeLink,
              )}
              to={'/'}
            >
              <IconArrowNarrowLeft className={'mr-1'} stroke={1.5} />
              <Text className={classes.backToHomeText}>{'Powrót na stronę główną'}</Text>
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
