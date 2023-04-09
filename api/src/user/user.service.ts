import { MapModelToUser } from '@auth/mappers'
import { HttpStatus, Injectable } from '@nestjs/common'
import { User as UserModel } from '@prisma/client'
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
    try {
      const user: UserModel = await this.prismaService.user.findUnique({ where: { uid } })
      return MapModelToUser(user)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, 'Brak użytkownika w systemie')
    }
  }
}
