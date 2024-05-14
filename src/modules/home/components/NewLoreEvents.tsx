import { Link } from 'react-router-dom'
import { Text, Title, Tooltip } from '@mantine/core'
import clsx from 'clsx'

import classes from './Components.module.css'

export function NewLoreEvents() {
  return (
    <Tooltip color={'dark'} label={'Najnowsze wydarzenia fabularne'} position={'bottom'}>
      <Link
        className={clsx(
          'col-span-12 row-span-2 lg:col-span-4 lg:row-span-1 rounded-xl overflow-hidden flex items-end relative',
          classes.newLoreEvents,
        )}
        to={'/'}
      >
        <div
          className={clsx(
            'relative z-10 p-4 m-4 rounded-xl',
            classes.newLoreEventsContent,
          )}
        >
          <Title className={classes.newLoreEventsTitle} order={3}>
            {'Ut enim ad'}
          </Title>
          <Text className={classes.newLoreEventsText}>
            {
              'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
            }
          </Text>
        </div>
      </Link>
    </Tooltip>
  )
}
