'use client'

import Link from 'next/link'
import { Anchor } from '@mantine/core'
import { authStyles } from '@modules/auth'
import { useLocale } from '@modules/locale'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { clsx } from 'clsx'
const BackToHome = () => {
  const { translateByHook } = useLocale('global')

  return (
    <Anchor
      href={'/'}
      component={Link}
      className={clsx('flex items-center mt-8', authStyles.backToHome)}
    >
      <IconArrowNarrowLeft size={18} stroke={1.5} className={'mr-2'} />
      <>{translateByHook('actions.backToHome')}</>
    </Anchor>
  )
}

export default BackToHome
