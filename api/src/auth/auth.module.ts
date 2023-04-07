import { AccessTokenStrategy, RefreshTokenStrategy } from '@auth/strategies'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '@user/schemas'
import { UserService } from '@user/user.service'

// TODO: Prisma is currently no use in project
// import { PrismaService } from '@prisma/prisma.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [JwtModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [AuthService, UserService, AccessTokenStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
