import { AccessTokenGuard } from '@auth/guards'
import { AuthCreateUserParams, AuthCreateUserSnapshot } from '@auth/models'
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async createAccount(@Body() userData: AuthCreateUserParams, @Res() res: Response) {
    const data: AuthCreateUserSnapshot = await this.authService.createAccount(userData)
    return res
      .cookie('x-access-token', data.accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 21600000),
      })
      .cookie('x-refresh-token', data.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 604800000),
      })
      .json({ user: data.user, refreshToken: data.refreshToken })
  }

  @Post('login')
  async loginAccount() {
    return {}
  }

  @Get('auto-login')
  async autoLoginAccount() {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async logoutAccount(@Res() res: Response) {
    return res.clearCookie('x-access-token', { httpOnly: true }).clearCookie('x-refresh-token', { httpOnly: true }).end()
  }
}
