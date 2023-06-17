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
      throw HttpError(HttpStatus.BAD_REQUEST, err?.response)
    }
  }

  async getUser(uid: string): Promise<UserSnapshot> {
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { uid } })

      if (!user) {
        throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
      }

      return MapModelToUser(user)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, err?.response)
    }
  }

  async getFullUserByName(login: string): Promise<UserModel> {
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { login } })

      if (!user) {
        throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
      }

      return user
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, err?.response)
    }
  }
}
