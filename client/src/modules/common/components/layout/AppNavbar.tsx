import { ReactNode } from 'react'
import { createStyles } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.dark[8],
    borderBottom: '1px solid',
    borderColor: theme.colors.dark[6],
  },
}))

interface IProps {
  children: ReactNode
  isDesktopView: boolean
}

function AppNavbar({ children, isDesktopView }: IProps) {
  const { classes } = useStyles()

  if (isDesktopView) {
    return (
      <header className={clsx('pt-2 pb-4', classes.navbar)}>
        <div className={'mx-8'}>{children}</div>
      </header>
    )
  }

  return <span>{'Mobile'}</span>
}

export default AppNavbar
