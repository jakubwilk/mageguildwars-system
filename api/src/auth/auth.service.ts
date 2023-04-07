import { MapModelToUser } from '@auth/mappers'
import { CreateAccountRequestParams, CreateSessionUserData, CreateSessionUserSnapshot, CreateTokenModel } from '@auth/models'
import { HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '@prisma/prisma.service'
import { UserAccountSnapshot } from '@user/models'
import { UserService } from '@user/user.service'
import { createSlug } from '@utils/database.helper'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prismaService: PrismaService,
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
        slug: createSlug(login),
        email,
        password: hashedPassword,
      }
      const data = await this.prismaService.user.create({ data: dataToCreate })
      const session: CreateSessionUserSnapshot = await this.createSession(MapModelToUser(data))
      await this.prismaService.user.update({ where: { id: data.id }, data: { refreshToken: session.refreshToken } })
      return session
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

  async getAccessToken(userId: number, login: string): Promise<string> {
    try {
      const payload: CreateSessionUserData = { id: userId, login }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_SECRET'), expiresIn: '6h' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'ACCESS TOKEN')
    }
  }

  async getRefreshToken(userId: number, login: string): Promise<string> {
    try {
      const payload: CreateSessionUserData = { id: userId, login }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_REFRESH_SECRET'), expiresIn: '14d' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'REFRESH TOKEN')
    }
  }
}
