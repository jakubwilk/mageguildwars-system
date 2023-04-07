import { User as UserSnapshot } from '@prisma/client'
import { UserAccountSnapshot } from '@user/models'

export const MapModelToUser = (user: UserSnapshot): UserAccountSnapshot => {
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
