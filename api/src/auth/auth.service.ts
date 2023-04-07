import { MapModelToUser } from '@auth/mappers'
import { CreateAccountRequestParams, CreateSessionUserData, CreateSessionUserSnapshot, CreateTokenModel } from '@auth/models'
import { HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
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
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>,
    private userService: UserService
  ) {}

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
      const tokens = await this.getTokens(data)
      return { ...tokens, user: data }
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.LDE_USER_3)
    }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }

  async getTokens(data: UserAccountSnapshot): Promise<CreateTokenModel> {
    try {
      const { id, login } = data
      const accessToken = await this.getAccessToken(id, login)
      const refreshToken = await this.getRefreshToken(id, login)
      return { accessToken, refreshToken }
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, err)
    }
  }

  async getAccessToken(userId: string, login: string): Promise<string> {
    try {
      const payload: CreateSessionUserData = { id: userId, login }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_SECRET'), expiresIn: '6h' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'ACCESS TOKEN')
    }
  }

  async getRefreshToken(userId: string, login: string): Promise<string> {
    try {
      const payload: CreateSessionUserData = { id: userId, login }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_REFRESH_SECRET'), expiresIn: '14d' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'REFRESH TOKEN')
    }
  }
}
