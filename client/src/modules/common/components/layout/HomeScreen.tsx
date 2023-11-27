import { Logo } from '@modules/common'
import { clsx } from 'clsx'

import homeScreenClasses from './../../styles/common.home-screen.module.css'

interface IProps {
  homeClassName?: string
}

function HomeScreen({ homeClassName = 'min-h-[80vh]' }: IProps) {
  return (
    <section className={clsx(homeClassName, 'w-full', homeScreenClasses.homeScreen)}>
      <div className={'min-h-[inherit] container mx-auto'}>
        <div className={'p-4 min-h-[inherit] flex items-center justify-center'}>
          <Logo />
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
