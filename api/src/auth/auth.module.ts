import { AccessTokenStrategy, RefreshTokenStrategy } from '@auth/strategies'
import { DatabaseModule } from '@database/database.module'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { usersProviders } from '@user/user.provider'
// import { PrismaService } from '@prisma/prisma.service'
import { UserService } from '@user/user.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [DatabaseModule, PassportModule, JwtModule],
  // providers: [PrismaService, AuthService, UserService, AccessTokenStrategy, RefreshTokenStrategy],
  providers: [AccessTokenStrategy, RefreshTokenStrategy, AuthService, UserService, ...usersProviders],
  controllers: [AuthController],
})
export class AuthModule {}
