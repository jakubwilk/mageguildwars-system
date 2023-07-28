import { ApiProperty } from '@nestjs/swagger'
import { UserSnapshotDto } from '@user/models'

export interface AuthRules {
  id: string
  title: string
  content: Array<{ id: string; text: string }>
}

// R E F A C T O R
export class AuthTokenDto {
  @ApiProperty({
    description: 'Unique user ID',
  })
  uid: string
}

export class AuthUserTokensDto {
  @ApiProperty({
    description: 'User unique access token',
  })
  accessToken: string

  @ApiProperty({
    description: 'User unique refresh token',
  })
  refreshToken: string
}

export class CreateUserDto {
  @ApiProperty({
    description: 'Account and first profile username',
  })
  login: string

  @ApiProperty({
    description: 'Account email',
  })
  email: string

  @ApiProperty({
    description: 'Strong safe account password',
  })
  password: string
}

export class LoginUserDto {
  @ApiProperty({
    description: 'Account name used in registration process',
  })
  login: string

  @ApiProperty({
    description: 'User password',
  })
  password: string
}

export class AuthUserSnapshotDto {
  @ApiProperty({
    description: 'User object',
  })
  user: UserSnapshotDto

  @ApiProperty({
    description: 'User access token used in authorization',
  })
  accessToken: string

  @ApiProperty({
    description: 'User refresh token used to update access token',
  })
  refreshToken: string
}
