'use client'

import Link from 'next/link'
import { Button } from '@mantine/core'
import { IAppNavbar, useSideNav } from '@modules/common'
import { isEmpty } from 'lodash'

const SideNavbar = () => {
  const { menu } = useSideNav()

  if (isEmpty(menu)) {
    return null
  }

  return menu.map(({ slug, name, url, icon }: IAppNavbar) => (
    <Button
      key={slug}
      component={Link}
      href={url}
      radius={'xs'}
      className={'flex items-center'}
    >
      {icon && icon}
      <span className={icon ? 'pl-4' : ''}>{name}</span>
    </Button>
  ))
}

export default SideNavbar
