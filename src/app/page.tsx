import { AppLayout } from '@modules/common'
import { getTranslations } from '@modules/locale'

export const generateMetadata = async () => {
  const { translate } = getTranslations('global')

  return {
    title: translate('pageTitle'),
    description: translate('pageDescription'),
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
