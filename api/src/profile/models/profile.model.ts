import { BaseTitle, ProfileRole } from '@prisma/client'

export interface ProfileCreateParams {
  name: string
  role: ProfileRole
  title?: BaseTitle
  additionalTitle?: string
  avatarUrl?: string
  signature?: string
}
