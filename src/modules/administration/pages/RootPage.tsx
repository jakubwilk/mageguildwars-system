import { Outlet } from 'react-router-dom'

export function RootPage() {
  return (
    <div
      className={
        'grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-8 mb-4 lg:mb-8'
      }
    >
      <div className={'col-span-12 row-span-1 lg:col-span-3'}>{'menu boczne'}</div>
      <Outlet />
    </div>
  )
}
