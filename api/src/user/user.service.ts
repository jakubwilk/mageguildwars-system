import { MapModelToUser } from '@auth/mappers'
import { HttpStatus, Inject, Injectable } from '@nestjs/common'
import { User } from '@user/entities/user.entity'
import { UserSnapshot } from '@user/models'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'

@Injectable()
export class UserService {
  constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof User) {}

  async isUserExist(field: keyof User, value: string | boolean | Date): Promise<boolean> {
    try {
      const user: User = await this.usersRepository.findOne({ where: { [field]: value } })

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
      const user: User = await this.usersRepository.findOne({ where: { uid } })
      return MapModelToUser(user)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
    }
  }

  async getFullUserByName(login: string): Promise<User> {
    try {
      return await this.usersRepository.findOne({ where: { login } })
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER.MISSING_USER)
    }
  }
}
