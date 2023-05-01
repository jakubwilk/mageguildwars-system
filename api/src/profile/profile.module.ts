import { Module } from '@nestjs/common'
import { PrismaService } from '@prisma/prisma.service'

import { ProfileController } from './profile.controller'
import { ProfileService } from './profile.service'

@Module({
  providers: [PrismaService, ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
