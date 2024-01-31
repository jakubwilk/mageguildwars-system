import { AppLayout, PageContainer } from '@modules/common'
import { AccountPage } from '@modules/user'

export const generateMetadata = async () => {
  const title = `Podgląd konta | Mage Guild Wars`

  return {
    title,
  }
}

export default function Profile() {
  return (
    <AppLayout>
      <PageContainer>
        <AccountPage />
      </PageContainer>
    </AppLayout>
  )
}
