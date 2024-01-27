import { AppLayout, PageContainer } from '@modules/common'
import { getUser, ProfilePage } from '@modules/user'

interface IParams {
  params: {
    uid: string
  }
}

export const generateMetadata = async ({ params: { uid } }: IParams) => {
  const { login } = await getUser(uid)

  return {
    title: `Profil użytkownika ${login} | Mage Guild Wars`,
    description: `Szczegóły użytkownika ${login} na Mage Guild Wars. Sprawdź konto, utworzone profile oraz staż na Mage Guild Wars`,
  }
}

export default function Profile({ params: { uid } }: IParams) {
  return (
    <AppLayout>
      <PageContainer>
        <ProfilePage uid={uid} />
      </PageContainer>
    </AppLayout>
  )
}
