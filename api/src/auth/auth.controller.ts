import { CreateAccountRequestParams, CreateSessionUserSnapshot } from '@auth/models'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createAccount(@Body() userData: CreateAccountRequestParams): Promise<CreateSessionUserSnapshot> {
    return await this.authService.createAccount(userData)
  }

  @Get(':userId')
  async logoutUser(@Param('userId') userId: string) {
    return this.authService.endSession(userId)
  }
}
