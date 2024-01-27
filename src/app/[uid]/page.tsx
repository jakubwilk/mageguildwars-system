import { AppLayout, PageContainer } from '@modules/common'
import { ProfilePage } from '@modules/user'

interface IParams {
  params: {
    uid: string
  }
}

export const generateMetadata = async ({ params }: IParams) => {
  console.log('params', params)

  return {
    title: 'dupa',
    description: 'wolowa',
  }
}

export default function Profile({ params }: IParams) {
  console.log('params 1', params)

  return (
    <AppLayout>
      <PageContainer>
        <ProfilePage />
      </PageContainer>
    </AppLayout>
  )
}
