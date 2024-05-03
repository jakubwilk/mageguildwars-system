import { Outlet } from 'react-router-dom'
import { SideMenu, Statistics } from 'administration/components'

export function RootPage() {
  return (
    <div
      className={
        'grid grid-cols-12 grid-rows-[auto,auto,1fr] lg:grid-rows-[auto,1fr] gap-4 lg:gap-8 mb-4 lg:mb-8'
      }
    >
      <Statistics />
      <div className={'col-span-12 row-span-2 lg:col-span-3'}>
        <SideMenu />
      </div>
      <Outlet />
    </div>
  )
}
