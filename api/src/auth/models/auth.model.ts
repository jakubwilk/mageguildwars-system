import { ApiProperty } from '@nestjs/swagger'
import { UserSnapshot } from '@user/models'

export interface AuthTokensModel {
  accessToken: string
  refreshToken: string
}

export interface AuthCreateUserSnapshot {
  user: UserSnapshot
  accessToken: string
  refreshToken: string
}

export interface AuthTokenPayload {
  uid: string
}

export interface AuthCreateUserParams {
  login: string
  email: string
  password: string
}

export interface AuthLoginUserParams {
  login: string
  password: string
}

export interface AuthRules {
  id: string
  title: string
  content: Array<{ id: string; text: string }>
}

// R E F A C T O R

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
