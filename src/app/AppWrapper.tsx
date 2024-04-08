import { ReactNode } from 'react'
import { ColorSchemeScript } from '@mantine/core'
import { MantineProvider } from '@mantine/core'
import dayjs from 'dayjs'

import 'dayjs/locale/pl.js'

import { theme } from './config'

import '@mantine/core/styles.layer.css'

dayjs.locale('pl')

interface IProps {
  children: ReactNode
}

export function AppWrapper({ children }: IProps) {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider
        defaultColorScheme={'dark'}
        forceColorScheme={'dark'}
        theme={theme}
      >
        {children}
      </MantineProvider>
    </>
  )
}
