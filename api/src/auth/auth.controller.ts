import { CreateAccountRequestParams } from '@auth/models'
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'

@ApiBearerAuth()
@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, description: 'User account has been successfully created.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Validation error' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Missing permissions, no access to endpoint' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Issue with API server' })
  @ApiBody({ type: CreateAccountRequestParams })
  async createAccount(@Body() userData: CreateAccountRequestParams) {
    return await this.authService.createAccount(userData)
  }

  @Get(':userId')
  @ApiResponse({ status: HttpStatus.OK, description: 'User has been successfully logged out.' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Missing permissions, no access to endpoint' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Issue with API server' })
  @ApiParam({ name: 'userId', type: String, description: 'Logged user ID' })
  async logoutUser(@Param('userId') userId: string) {
    return this.authService.endSession(userId)
  }
}
