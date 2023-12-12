'use client'

import Link from 'next/link'
import { Anchor } from '@mantine/core'
import { authStyles } from '@modules/auth'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { clsx } from 'clsx'

const BackToHome = () => {
  return (
    <Anchor
      href={'/'}
      component={Link}
      className={clsx('flex items-center mt-4', authStyles.backToHome)}
    >
      <IconArrowNarrowLeft size={18} stroke={1.5} className={'mr-2'} />
      {'actions:backToHome'}
    </Anchor>
  )
}

export default BackToHome
