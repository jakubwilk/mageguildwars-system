import { User as UserModel } from '@prisma/client'
import { UserSnapshot } from '@user/models'

export const MapModelToUser = (user: UserModel): UserSnapshot => {
  return {
    uid: user.uid,
    login: user.login,
    slug: user.slug,
    email: user.email,
    group: user.group,
    isCreateProfileEnabled: user.isCreateProfileEnabled,
    isGameMasterProfileEnabled: user.isGameMasterProfileEnabled,
    isActive: user.isActive,
    isLocked: user.isLocked,
    isGameMaster: user.isGameMaster,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}
