import { Fragment, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@auth'
import { PageWithoutTable, useAppLayoutContext } from '@common'
import { Text, Tooltip } from '@mantine/core'

import { UserSettingsContent } from '../components'
import { USER_BREADCRUMB_NAVIGATION } from '../models'

function UserPage() {
  const { setIsHomePage } = useAppLayoutContext()
  const { user } = useAuthContext()

  useEffect(() => {
    setIsHomePage(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const breadcrumbs = useMemo(() => {
    return USER_BREADCRUMB_NAVIGATION.map(({ id, link, name, title }) => {
      if (link && title) {
        return (
          <Tooltip key={id} label={title} position={'bottom'} withArrow>
            <Link to={link} aria-label={title}>
              {name}
            </Link>
          </Tooltip>
        )
      }

      return (
        <Text key={id} size={'sm'} component={'span'}>
          {name}
        </Text>
      )
    })
  }, [])

  const title = useMemo(() => `Panel użytkownika ${user?.login}`, [user])

  return (
    <Fragment>
      <Helmet>
        <title>{`${title} | Mage Guild Wars`}</title>
      </Helmet>
      <div className={'container mx-auto mt-8 px-4'}>
        <PageWithoutTable title={title} breadcrumbs={breadcrumbs}>
          <UserSettingsContent />
        </PageWithoutTable>
      </div>
    </Fragment>
  )
}

export default UserPage
