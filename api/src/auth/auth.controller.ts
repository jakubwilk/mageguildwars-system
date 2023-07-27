import { AccessTokenGuard, RefreshTokenGuard } from '@auth/guards'
import { AuthCreateUserSnapshot, CreateUserDto, LoginUserDto } from '@auth/models'
import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from '@user/user.service'
import { AUTH_COOKIE_NAME, responseWithUserDataAndTokens } from '@utils/auth.helper'
import { ERROR_MESSAGES } from '@utils/error.helper'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'

@ApiTags('Auth module')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user account with first player profile' })
  @ApiResponse({ status: 201, description: 'Account with first profile successfully created' })
  @ApiResponse({
    status: 400,
    description:
      'Account cannot be created because there is record in database with the same email or login or profile with that name already exists in database',
  })
  @ApiResponse({ status: 500, description: 'There is a problem with create hash, read or write data into database' })
  async createAccount(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const data: AuthCreateUserSnapshot = await this.authService.createAccount(createUserDto)
    return responseWithUserDataAndTokens(data, res)
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in to the account' })
  @ApiResponse({ status: 200, description: 'Successfully logged into account' })
  @ApiResponse({
    status: 400,
    description: 'Account not found in the database',
  })
  @ApiResponse({ status: 500, description: 'There is a problem with create hash, read or write data into database' })
  async loginAccount(@Body() userData: LoginUserDto, @Res() res: Response) {
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
  @ApiOperation({ summary: 'Logout from account' })
  @ApiCookieAuth('x-access-token')
  @ApiResponse({ status: 200, description: 'Cookies have been deleted' })
  @ApiResponse({ status: 401, description: 'Missing auth token cookie' })
  @Get()
  async logoutAccount(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
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
