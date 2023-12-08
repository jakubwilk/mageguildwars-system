import { getTranslations } from 'next-intl/server'
import { AppLayout } from '@modules/common'

interface IParams {
  params: { locale: string }
}

export const generateMetadata = async ({ params: { locale } }: IParams) => {
  const t = await getTranslations({ locale, namespace: 'global' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
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
