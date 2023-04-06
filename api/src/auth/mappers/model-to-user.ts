import { UserAccountSnapshot } from '@user/models'
import { UserDocument } from '@user/schemas'

export const MapModelToUser = (user: UserDocument): UserAccountSnapshot => {
  return {
    id: user.id,
    login: user.login,
    slug: user.slug,
    email: user.email,
    group: user.group,
    isActive: user.isActive,
    isLocked: user.isLocked,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}
