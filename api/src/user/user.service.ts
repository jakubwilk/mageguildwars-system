import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Group, UserAccountSnapshot } from '@user/models'
import { User } from '@user/schemas'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async isUser(login: string): Promise<boolean> {
    try {
      const user: User = await this.userModel.findOne({ login }).exec()

      if (user) {
        throw new HttpException(null, HttpStatus.BAD_REQUEST)
      }

      return false
    } catch (err) {
      throw new HttpException('Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001b', HttpStatus.BAD_REQUEST)
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
