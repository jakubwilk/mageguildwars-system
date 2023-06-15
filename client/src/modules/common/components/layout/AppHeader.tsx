import { ReactNode } from 'react'
import { createStyles } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[8],
  },
}))

interface IProps {
  children: ReactNode
}

function AppHeader({ children }: IProps) {
  const { classes } = useStyles()

  return (
    <header className={clsx('py-4', classes.header)}>
      <div className={'mx-8'}>{children}</div>
    </header>
  )
}

export default AppHeader
