import { Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useAuthContext } from '@auth'
import { useAppLayoutContext } from '@common'
import { createStyles } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  page: {
    border: `1px solid ${theme.colors.gray[9]}`,
  },
  title: {
    marginTop: 0,
  },
}))

function UserPage() {
  const { setIsHomePage } = useAppLayoutContext()
  const { user } = useAuthContext()
  const { classes } = useStyles()

  useEffect(() => {
    setIsHomePage(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>{`Panel użytkownika ${user?.login} | Mage Guild Wars`}</title>
      </Helmet>
      <div className={'container mx-auto my-8'}>
        <div className={clsx('p-4', classes.page)}>
          <h2 className={clsx('mb-4 uppercase', classes.title)}>{`Ustawienia konta ${user?.login}`}</h2>
        </div>
      </div>
    </Fragment>
  )
}

export default UserPage
