import { AppLayout, PageContainer } from '@modules/common'
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
      <PageContainer>
        <p>{'Content'}</p>
      </PageContainer>
    </AppLayout>
  )
}
