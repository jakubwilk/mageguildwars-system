'use client'

import { IAppNavbar, SidebarNavbarLink, useSideNav } from '@modules/common'
import { isEmpty } from 'lodash'

const SidebarNavbar = () => {
  const { menu } = useSideNav()

  if (isEmpty(menu)) {
    return null
  }

  return menu.map(({ slug, name, description, url, Icon, isDisabled }: IAppNavbar) => (
    <SidebarNavbarLink
      key={slug}
      name={name}
      description={description}
      url={url}
      Icon={Icon}
      isDisabled={isDisabled}
    />
  ))
}

export default SidebarNavbar
