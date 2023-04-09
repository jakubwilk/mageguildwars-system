import { AccessTokenStrategy, RefreshTokenStrategy } from '@auth/strategies'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from '@prisma/prisma.service'
import { UserService } from '@user/user.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [PassportModule, JwtModule],
  providers: [PrismaService, AuthService, UserService, AccessTokenStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
