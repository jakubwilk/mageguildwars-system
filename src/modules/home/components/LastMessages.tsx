import clsx from 'clsx'

import { Section } from '../../common/components'

import classes from './Components.module.css'

export function LastMessages() {
  return (
    <Section
      className={'col-span-12 row-span-1 lg:col-span-8 h-full'}
      title={'ostatnie wpisy'}
    >
      <div className={clsx('p-4 rounded-xl max-h-[250px]', classes.lastMessages)}>
        {'last messages'}
      </div>
    </Section>
  )
}
