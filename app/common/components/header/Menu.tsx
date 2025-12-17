'use client'

import * as TablerIcons from '@tabler/icons-react'
import type { IMenuItem, TIconComponent } from 'common/models'
import { MAIN_MENU } from 'common/utils/menu.utils'
import React, { useCallback, useMemo } from 'react'

export default function Menu() {
  const menuItems = useMemo(() => MAIN_MENU, [])

  const getIconComponent = useCallback((iconName?: string): React.ReactNode => {
    if (!iconName) return null

    const iconsRecord = TablerIcons as unknown as Record<
      string,
      TIconComponent | React.ReactElement | undefined
    >

    if (!(iconName in iconsRecord) || iconsRecord[iconName] === undefined) {
      if (process.env.NODE_ENV === 'development') {
        const availableIcons = Object.keys(iconsRecord)
          .filter((key) => key.startsWith('Icon'))
          .slice(0, 10)
        console.warn(
          `Icon "${iconName}" not found in @tabler/icons-react.`,
          `Total icons in bundle: ${Object.keys(iconsRecord).length}`,
          `Sample available: ${availableIcons.join(', ')}...`,
        )
      }
      return null
    }

    const IconComponent = iconsRecord[iconName]

    if (!IconComponent) {
      return null
    }

    if (React.isValidElement(IconComponent)) {
      return IconComponent
    }

    if (typeof IconComponent === 'function') {
      return <IconComponent size={16} stroke={1.5} />
    }

    if (typeof IconComponent === 'object' && IconComponent !== null) {
      try {
        const Component = IconComponent as TIconComponent
        return <Component size={16} stroke={1.5} />
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Failed to render icon "${iconName}":`, error)
        }
        return null
      }
    }

    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Icon "${iconName}" is not a valid React component. Type: ${typeof IconComponent}`,
      )
    }
    return null
  }, [])

  return (
    <div>
      <div>Menu</div>
      {menuItems.map((item: IMenuItem) => (
        <div key={item.id}>
          {getIconComponent(item.icon)}
          {item.label}
        </div>
      ))}
    </div>
  )
}
