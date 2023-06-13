import { AccessTokenGuard, RefreshTokenGuard } from '@auth/guards'
import { AuthCreateUserParams, AuthCreateUserSnapshot, AuthLoginUserParams } from '@auth/models'
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { UserService } from '@user/user.service'
import { AUTH_COOKIE_NAME, responseWithUserDataAndTokens } from '@utils/auth.helper'
import { ERROR_MESSAGES } from '@utils/error.helper'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post()
  async createAccount(@Body() userData: AuthCreateUserParams, @Res() res: Response) {
    const data: AuthCreateUserSnapshot = await this.authService.createAccount(userData)
    return responseWithUserDataAndTokens(data, res)
  }

  @Post('login')
  async loginAccount(@Body() userData: AuthLoginUserParams, @Res() res: Response) {
    const { login, password } = userData
    const user = await this.userService.getFullUserByName(login)
    await this.authService.verifyHash(password, user.password, ERROR_MESSAGES.AUTH.WRONG_LOGIN_DATA)
    const data: AuthCreateUserSnapshot = await this.authService.loginAccount(user.uid)
    return responseWithUserDataAndTokens(data, res)
  }

  @UseGuards(RefreshTokenGuard)
  @Get('me')
  async autoLoginAccount(@Req() req: Request, @Res() res: Response) {
    const uid = req.user['uid']
    const data: AuthCreateUserSnapshot = await this.authService.loginAccount(uid)
    return responseWithUserDataAndTokens(data, res)
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshToken(@Req() req: Request) {
    const uid = req.user['uid']
    const refreshToken = req.cookies[AUTH_COOKIE_NAME.REFRESH_TOKEN]
    return await this.authService.refreshToken(uid, refreshToken)
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  async logoutAccount(@Res() res: Response) {
    return res
      .clearCookie(AUTH_COOKIE_NAME.ACCESS_TOKEN, { httpOnly: true })
      .clearCookie(AUTH_COOKIE_NAME.REFRESH_TOKEN, { httpOnly: true })
      .end()
  }

  @Get('/rules')
  async getRegistrationRules(@Res() res: Response) {
    const rules = await this.authService.getAuthRules()
    return res.json(rules)
  }
}
