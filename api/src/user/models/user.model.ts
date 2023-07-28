import { ApiProperty } from '@nestjs/swagger'
import { UserGroup } from '@prisma/client'

export interface UserSnapshot {
  uid: string
  login: string
  slug: string
  email: string
  group: UserGroup
  isActive: boolean
  isLocked: boolean
  isCreateProfileEnabled: boolean
  isGameMasterProfileEnabled: boolean
  isGameMaster: boolean
  createdAt: Date
  updatedAt: Date
}

// R E F A C T O R
export class UserSnapshotDto {
  @ApiProperty({
    description: 'Unique user ID',
  })
  uid: string

  @ApiProperty({
    description: 'Account username and first profile name',
  })
  login: string

  @ApiProperty({
    description: 'User slug used in URLs',
  })
  slug: string

  @ApiProperty({
    description: 'User email',
  })
  email: string

  @ApiProperty({
    description: 'Account group',
  })
  group: UserGroup

  @ApiProperty({
    description: 'Check if account is activated by admins',
  })
  isActive: boolean

  @ApiProperty({
    description: 'Check if account is banned or temporary locked',
  })
  isLocked: boolean

  @ApiProperty({
    description: 'Check if user is allowed to create more profiles',
  })
  isCreateProfileEnabled: boolean

  @ApiProperty({
    description: 'Check if user is allowed to create game master profile',
  })
  isGameMasterProfileEnabled: boolean

  @ApiProperty({
    description: 'Check if account is game master. TODO: To remove',
  })
  isGameMaster: boolean

  @ApiProperty({ description: 'Date when account was created' })
  createdAt: Date

  @ApiProperty({
    description: 'Date of last account update',
  })
  updatedAt: Date
}
