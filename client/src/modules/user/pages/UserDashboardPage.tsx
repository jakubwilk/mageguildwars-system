import { Fragment, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@auth'
import { PageWithoutTable } from '@common'
import { Text, Tooltip } from '@mantine/core'
import { USER_BREADCRUMB_NAVIGATION, UserDashboardContent } from '@user'

function UserDashboardPage() {
  const { t } = useTranslation()
  const { user } = useAuthContext()

  const breadcrumbs = useMemo(() => {
    return USER_BREADCRUMB_NAVIGATION.map(({ id, link, name, title }) => {
      if (link && title) {
        return (
          <Tooltip key={id} label={title} position={'bottom'}>
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
        <title>{t('user:page.settings.title', { username: user?.login })}</title>
      </Helmet>
      <PageWithoutTable title={title} breadcrumbs={breadcrumbs}>
        <UserDashboardContent />
      </PageWithoutTable>
    </Fragment>
  )
}

export default UserDashboardPage
