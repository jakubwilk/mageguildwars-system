import { MapModelToUser } from '@auth/mappers'
import { AuthCreateUserParams, AuthCreateUserSnapshot, AuthTokenPayload, AuthTokensModel } from '@auth/models'
import { HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { User as UserModel } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import { UserSnapshot } from '@user/models'
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

  async createHash(data: string): Promise<string> {
    try {
      return await argon2.hash(data)
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.CRYPTO.ISSUE_WITH_CREATE_HASH)
    }
  }

  async verifyHash(data: string, hashedData: string, msg?: string): Promise<boolean> {
    try {
      return await argon2.verify(hashedData, data)
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, msg || err)
    }
  }

  async getAccessToken(uid: string): Promise<string> {
    try {
      const payload: AuthTokenPayload = { uid }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_SECRET'), expiresIn: '6h' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.CRYPTO.ISSUE_WITH_CREATE_ACCESS_TOKEN)
    }
  }

  async getRefreshToken(uid: string): Promise<string> {
    try {
      const payload: AuthTokenPayload = { uid }
      return await this.jwtService.signAsync(payload, { secret: this.configService.get<string>('JWT_REFRESH_SECRET'), expiresIn: '14d' })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.CRYPTO.ISSUE_WITH_CREATE_REFRESH_TOKEN)
    }
  }

  async getTokens(data: UserSnapshot): Promise<AuthTokensModel> {
    try {
      const { uid } = data
      const accessToken = await this.getAccessToken(uid)
      const refreshToken = await this.getRefreshToken(uid)
      return { accessToken, refreshToken }
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, err)
    }
  }

  async updateRefreshToken(uid: string, refreshToken: string) {
    try {
      const newRefreshToken = await argon2.hash(refreshToken)
      await this.prismaService.user.update({ where: { uid }, data: { refreshToken: newRefreshToken } })
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.CRYPTO.ISSUE_WITH_UPDATE_REFRESH_TOKEN)
    }
  }

  async refreshToken(uid: string, refreshToken: string) {
    const user: UserModel = await this.prismaService.user.findUnique({ where: { uid } })

    if (!user || !user.refreshToken) {
      throw HttpError(HttpStatus.UNAUTHORIZED, ERROR_MESSAGES.AUTH.NO_ACCESS)
    }

    const isRefreshTokenCorrect = await argon2.verify(user.refreshToken, refreshToken)

    if (!isRefreshTokenCorrect) {
      throw HttpError(HttpStatus.UNAUTHORIZED, ERROR_MESSAGES.AUTH.NO_ACCESS)
    }

    const tokens = await this.getTokens(MapModelToUser(user))
    await this.updateRefreshToken(user.uid, tokens.refreshToken)
    return tokens
  }

  async getUserSessionData(data: UserSnapshot): Promise<AuthCreateUserSnapshot> {
    try {
      const tokens = await this.getTokens(data)
      return { ...tokens, user: data }
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.AUTH.ISSUE_WITH_CREATE_SESSION)
    }
  }

  async createAccount({ login, email, password }: AuthCreateUserParams): Promise<AuthCreateUserSnapshot> {
    try {
      await this.userService.isUserExist('login', login)
      await this.userService.isUserExist('email', email)
      const hashedPassword = await this.createHash(password)
      const dataToCreate = {
        login,
        slug: createSlug(login),
        email,
        password: hashedPassword,
      }
      const data = await this.prismaService.user.create({ data: dataToCreate })
      const session: AuthCreateUserSnapshot = await this.getUserSessionData(MapModelToUser(data))
      await this.prismaService.user.update({ where: { id: data.id }, data: { refreshToken: session.refreshToken } })
      return session
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, ERROR_MESSAGES.AUTH.ISSUE_WITH_CREATE_USER)
    }
  }

  async loginAccount(uid: string): Promise<AuthCreateUserSnapshot> {
    try {
      const user: UserSnapshot = await this.userService.getUser(uid)
      return await this.getUserSessionData(user)
    } catch (err) {
      throw HttpError(HttpStatus.INTERNAL_SERVER_ERROR, err || ERROR_MESSAGES.USER.ISSUE_WITH_GET_USER_DATA)
    }
  }
}
