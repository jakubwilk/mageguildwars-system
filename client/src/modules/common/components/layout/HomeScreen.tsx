import { clsx, createStyles } from '@mantine/core'
import { Logo } from '@modules/common'

import homeImage from '../../../../assets/images/mgw-home.jpg'

const useStyles = createStyles(() => ({
  home: {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}))

interface IProps {
  homeClassName?: string
}

function HomeScreen({ homeClassName = 'min-h-[80vh]' }: IProps) {
  const { classes } = useStyles()

  return (
    <section className={clsx(homeClassName, 'w-full', classes.home)}>
      <div className={'min-h-[inherit] container mx-auto'}>
        <div className={'p-4 min-h-[inherit] flex items-center justify-center'}>
          <Logo />
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
