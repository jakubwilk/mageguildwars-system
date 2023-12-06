'use client'

import Link from 'next/link'
import { ActionIcon, Tooltip } from '@mantine/core'
import { IAppNavbar } from '@modules/common'
import { isNull } from 'lodash'

type TSidebarNavbarLink = Omit<IAppNavbar, 'slug'> & { key?: string }

const SidebarNavbarLink = ({
  name,
  description,
  url,
  Icon,
  isDisabled,
}: TSidebarNavbarLink) => {
  if (isDisabled) {
    return null
  }

  return (
    <Tooltip label={description}>
      <Link href={url}>
        {!isNull(Icon) && (
          <ActionIcon variant={'transparent'} color={'white'} className={'mr-2'}>
            <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        )}
        {name}
      </Link>
    </Tooltip>
  )
}

export default SidebarNavbarLink
