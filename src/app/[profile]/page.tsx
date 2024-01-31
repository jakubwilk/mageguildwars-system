import { AppLayout, PageContainer } from '@modules/common'
import { getTranslations } from '@modules/locale'
import { getUser, ProfilePage } from '@modules/user'

interface IParams {
  params: {
    uid: string
  }
}

export const generateMetadata = async ({ params: { uid } }: IParams) => {
  const { login } = await getUser(uid)
  const { translate } = getTranslations('profile')
  const { translate: globalTranslate } = getTranslations('global')

  const title = `${translate('pageTitle')} ${login} | ${globalTranslate('pageTitle')}`
  const description = `${translate('pageDescription.0')} ${login} ${translate(
    'pageDescription.1',
  )}`

  return {
    title,
    description,
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
