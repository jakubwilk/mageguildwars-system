import { ApiProperty } from '@nestjs/swagger'

export class CreateAccountRequestParams {
  @ApiProperty()
  login: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
}
