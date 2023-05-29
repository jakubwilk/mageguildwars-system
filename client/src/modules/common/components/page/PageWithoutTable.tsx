import { ReactNode } from 'react'
import { Breadcrumbs, createStyles, Skeleton } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '2rem',
    color: theme.colors.gray[2],
  },
  breadcrumbs: {
    color: theme.colors.gray[6],
    '& a:link, a:visited': {
      color: theme.colors.gray[7],
      textDecoration: 'none',
      transition: 'color .1s ease-in-out',
    },
    '& a:hover, a:focus': {
      color: theme.colors['dark-purple'][2],
    },
  },
}))

interface IProps {
  title: string
  breadcrumbs: ReactNode
  children: ReactNode
  headerActions?: ReactNode
  isLoading?: boolean
}

function PageWithoutTable({ title, breadcrumbs, children, headerActions, isLoading }: IProps) {
  const { classes } = useStyles()

  return (
    <main>
      <header>
        {isLoading ? (
          <Skeleton height={100} radius={'md'} />
        ) : (
          <div className={'flex items-center justify-between'}>
            <div>
              <h2 className={clsx('mt-0 mb-4', classes.title)}>{title}</h2>
              <Breadcrumbs className={clsx(classes.breadcrumbs)}>{breadcrumbs}</Breadcrumbs>
            </div>
            {headerActions && <div className={'ml-8'}>{headerActions}</div>}
          </div>
        )}
      </header>
      <section>{children}</section>
    </main>
  )
}

export default PageWithoutTable
