import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Group, UserAccountSnapshot } from '@user/models'
import { User } from '@user/schemas'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async isUser(login: string): Promise<boolean> {
    try {
      const user: User = await this.userModel.findOne({ login }).exec()

      if (user) {
        throw HttpError(HttpStatus.BAD_REQUEST)
      }

      return false
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.USER_EXIST)
    }
  }

  async getUser(id: string): Promise<UserAccountSnapshot> {
    const user: UserAccountSnapshot = {
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
