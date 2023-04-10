import { DatabaseModule } from '@database/database.module'
import { Module } from '@nestjs/common'

// import { PrismaService } from '@prisma/prisma.service'
import { UserController } from './user.controller'
import { usersProviders } from './user.provider'
import { UserService } from './user.service'

@Module({
  imports: [DatabaseModule],
  // providers: [PrismaService, UserService],
  providers: [UserService, ...usersProviders],
  controllers: [UserController],
})
export class UserModule {}
