import { HttpStatus, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import { Group, UserAccountSnapshot } from '@user/models'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async isUserLoginUsed(login: string): Promise<boolean> {
    try {
      const user: User = await this.prismaService.user.findUnique({ where: { login } })

      if (user) {
        throw HttpError(HttpStatus.BAD_REQUEST)
      }

      return false
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER_EXIST)
    }
  }

  async isUserEmailUsed(email: string): Promise<boolean> {
    try {
      const user: User = await this.prismaService.user.findUnique({ where: { email } })

      if (user) {
        throw HttpError(HttpStatus.BAD_REQUEST)
      }

      return false
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.EMAIL_EXIST)
    }
  }

  async getUser(id: number): Promise<UserAccountSnapshot> {
    const user: UserAccountSnapshot = {
      id,
      login: 'Vincent',
      slug: 'vincent',
      email: 'vincent@mageguildwars.pl',
      group: Group.OPERATOR,
      isActive: true,
      isLocked: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    return user
  }
}
