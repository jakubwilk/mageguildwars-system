import { Outlet } from 'react-router-dom'
import { Statistics } from 'administration/components'

export function RootPage() {
  return (
    <div
      className={
        'grid grid-cols-12 grid-rows-3 lg:grid-rows-2 gap-4 lg:gap-8 mb-4 lg:mb-8'
      }
    >
      <Statistics />
      <div className={'col-span-12 row-span-2 lg:col-span-3'}>{'menu boczne'}</div>
      <Outlet />
    </div>
  )
}
