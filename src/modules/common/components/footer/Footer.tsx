import { Text } from '@mantine/core'
import clsx from 'clsx'

import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={'flex items-center justify-center h-[100px]'}>
      <img
        alt={
          'Sygnet MGW w kształcie fioltetowej litery M w szarym kwadracie z zakrąglonymi rogami'
        }
        className={'max-h-[35px] max-w-[35px]'}
        src={'https://i.imgur.com/o9BN1ol.png'}
      />
      <Text className={clsx('ml-2', classes.copyrightText)}>
        {'© 2024 Mage Guild Wars'}
      </Text>
    </footer>
  )
}
