import { MapModelToUser } from '@auth/mappers'
import { CreateAccountRequestParams, CreateSessionUserData, CreateSessionUserSnapshot } from '@auth/models'
import { HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { UserAccountSnapshot } from '@user/models'
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
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.LDE_USER_2)
    }
  }

  async createAccount({ login, email, password }: CreateAccountRequestParams): Promise<CreateSessionUserSnapshot> {
    try {
      await this.userService.isUserLoginUsed(login)
      await this.userService.isUserEmailUsed(email)
      const hashedPassword = await this.createPasswordHash(password)
      const dataToCreate = {
        login,
        email,
        password: hashedPassword,
      }
      const user = new this.userModel(dataToCreate)
      const data = await user.save()
      return await this.createSession(MapModelToUser(data))
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.LDE_USER_1)
    }
  }

  async createSession(data: UserAccountSnapshot): Promise<CreateSessionUserSnapshot> {
    try {
      const payload: CreateSessionUserData = { id: data.id, login: data.login }
      const token = await this.jwtService.signAsync(payload, { expiresIn: '24h' })
      return { token, user: data }
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.LDE_USER_3)
    }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
