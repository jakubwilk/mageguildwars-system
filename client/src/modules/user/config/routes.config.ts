import { UserRoutesType } from '@user'

export const userRoutes: UserRoutesType = {
  userDashboardPage: () => '/account',
  userProfilePreviewPage: (slug: string) => `/profile/${slug}`,
}
