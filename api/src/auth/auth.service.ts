import { CreateAccountRequestParams } from '@auth/models'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prismaService: PrismaService) {}

  async createPasswordHash(password: string) {
    try {
      return await argon2.hash(password)
    } catch (err) {
      throw new HttpException('Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001a', HttpStatus.REQUEST_TIMEOUT)
    }
  }

  async createAccount({ login, email, password }: CreateAccountRequestParams) {
    try {
      const hashedPassword = await this.createPasswordHash(password)
      const dataToCreate: Prisma.UserCreateInput = {
        login,
        email,
        password: hashedPassword,
      }
      const user: User = await this.prismaService.user.create({
        data: { ...dataToCreate },
      })
      console.log('user', user)
      return { user: 'Vincent', role: 'OPERATOR' }
    } catch {
      throw new HttpException('Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001', HttpStatus.BAD_REQUEST)
    }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
