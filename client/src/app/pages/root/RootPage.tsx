import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import { clsx, createStyles, Tooltip } from '@mantine/core'

import logoImage from './../../../assets/images/logo.png'
import homeImage from './../../../assets/images/mgw-home.jpg'

const useStyles = createStyles(() => ({
  home: {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}))

function RootPage() {
  const [t] = useTranslation()
  const { classes } = useStyles()

  return (
    <main>
      <section className={clsx('min-h-screen min-w-full', classes.home)}>
        <div className={'min-h-[inherit] container mx-auto'}>
          <div className={'p-4 min-h-[inherit] flex items-center justify-center'}>
            <Tooltip label={t('home:tooltip.backToHome')} position={'bottom'}>
              <Link to={'/'}>
                <img src={logoImage} alt={''} />
              </Link>
            </Tooltip>
          </div>
        </div>
      </section>
      <Outlet />
    </main>
  )
}

export default RootPage
