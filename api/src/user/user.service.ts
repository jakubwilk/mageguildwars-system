import { MapModelToUser } from '@auth/mappers'
import { HttpStatus, Injectable } from '@nestjs/common'
import { User as UserModel } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import { UserSnapshot } from '@user/models'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async isUserExist(field: keyof UserModel, value: string | boolean | Date): Promise<boolean> {
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { [field]: value } })

      if (user) {
        throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.USER_EXIST)
      }

      return user === null
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, err)
    }
  }

  async getUser(uid: string): Promise<UserSnapshot> {
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { uid } })
      return MapModelToUser(user)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
    }
  }

  async getFullUserByName(login: string): Promise<UserModel> {
    try {
      return await this.prismaService.user.findUnique({ where: { login } })
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
    }
  }
}
