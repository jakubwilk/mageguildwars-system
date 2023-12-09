'use client'

import Link from 'next/link'
import { Anchor } from '@mantine/core'
import { authStyles } from '@modules/auth'
import { clsx } from 'clsx'

const BackToHome = () => {
  return (
    <Anchor href={'/'} component={Link} className={clsx('mt-4', authStyles.backToHome)}>
      {'Powrót do strony głównej'}
    </Anchor>
  )
}

export default BackToHome
