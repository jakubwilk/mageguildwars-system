import type { Metadata } from 'next'
import { Header, Navbar } from 'common/components'

export const metadata: Metadata = {
  title: 'Mage Guild Wars | Strona główna',
  description:
    'Mage Guild Wars to gra PBF-lite inspirowana światem anime i mangi po tytułem Fairy Tail, w której Ty jako Gracz tworzysz własną postać w świecie pełnym magii i magicznych zjawisk'
}

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
        <p>{'test'}</p>
      </main>
    </>
  )
}
