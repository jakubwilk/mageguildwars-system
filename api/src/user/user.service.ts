import { HttpStatus, Injectable } from '@nestjs/common'
import { User as UserModel, UserGroup } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import { UserSnapshot } from '@user/models'
import { HttpError } from '@utils/error.helper'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async isUserExist(field: keyof UserModel, value: string | boolean | Date): Promise<boolean> {
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { [field]: value } })

      return user === null
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, 'Podany użytkownik istnieje już w systemie')
    }
  }

  async getUser(uid: string): Promise<UserSnapshot> {
    const user: UserSnapshot = {
      uid,
      login: 'Vincent',
      slug: 'vincent',
      email: 'vincent@mageguildwars.pl',
      group: UserGroup.OPERATOR,
      isActive: true,
      isLocked: false,
      isCreateProfileEnabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    return user
  }
}
