import { CreateAccountRequestParams } from '@auth/models'
import { HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '@user/schemas'
import { UserService } from '@user/user.service'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'
import * as argon2 from 'argon2'
import { Model } from 'mongoose'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, @InjectModel(User.name) private userModel: Model<User>, private userService: UserService) {}

  async createPasswordHash(password: string) {
    try {
      return await argon2.hash(password)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.LDE_USER_2)
    }
  }

  async createAccount({ login, email, password }: CreateAccountRequestParams) {
    try {
      await this.userService.isUser(login)
      const hashedPassword = await this.createPasswordHash(password)
      const dataToCreate = {
        login,
        email,
        password: hashedPassword,
      }
      const user = new this.userModel(dataToCreate)
      await user.save()
      return { user: 'Vincent', role: 'OPERATOR' }
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, err || ERROR_MESSAGES.LDE_USER_1)
    }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
