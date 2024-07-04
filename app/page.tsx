import { Header, Navbar } from 'common/components'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
        <p>{'test'}</p>
      </main>
    </div>
  )
}
