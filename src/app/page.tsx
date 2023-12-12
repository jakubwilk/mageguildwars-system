import { AppLayout } from '@modules/common'

export const generateMetadata = async () => {
  return {
    title: 'pageTitle', // t('pageTitle'),
    description: 'pageDescription', // t('pageDescription'),
  }
}

export default function Home() {
  return (
    <AppLayout>
      <div className={'flex flex-col items-center justify-between p-24'}>
        <p>{'Content'}</p>
      </div>
    </AppLayout>
  )
}
