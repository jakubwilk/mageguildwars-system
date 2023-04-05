import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from '@prisma/prisma.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env['JWT_SECRET'],
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [PrismaService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
