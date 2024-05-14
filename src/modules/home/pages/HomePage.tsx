import { LastMessages, NewLoreEvents } from '../components'

export function HomePage() {
  return (
    <>
      <div
        className={
          'grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-8 mb-4 lg:mb-8'
        }
      >
        <LastMessages />
        <NewLoreEvents />
      </div>
      <div>{'test'}</div>
    </>
  )
}
