import { AppLayout, PageContainer } from '@modules/common'
import { getTranslations } from '@modules/locale'
import { getUser, ProfilePage } from '@modules/user'

interface IParams {
  params: {
    uid: string
  }
}

export const generateMetadata = async ({ params: { uid } }: IParams) => {
  const { profiles } = await getUser(uid)
  const { translate } = getTranslations('profile')
  const { translate: globalTranslate } = getTranslations('global')

  const title = `${translate('pageTitle')} ${profiles[0].name} | ${globalTranslate(
    'pageTitle',
  )}`
  const description = `${translate('pageDescription.0')} ${profiles[0].name} ${translate(
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
