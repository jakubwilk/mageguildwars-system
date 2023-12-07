'use client'

import { IAppNavbar, SidebarNavbarLink, useSidebarNav } from '@modules/common'
import { isEmpty } from 'lodash'

const SidebarNavbar = () => {
  const { menu } = useSidebarNav()

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
