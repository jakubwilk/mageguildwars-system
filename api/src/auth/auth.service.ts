import { CreateAccountRequestParams } from '@auth/models'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '@user/schemas'
import { UserService } from '@user/user.service'
import * as argon2 from 'argon2'
import { Model } from 'mongoose'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, @InjectModel(User.name) private userModel: Model<User>, private userService: UserService) {}

  async createPasswordHash(password: string) {
    try {
      return await argon2.hash(password)
    } catch (err) {
      throw new HttpException('Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001a', HttpStatus.BAD_REQUEST)
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
      console.log('user', user)
      return { user: 'Vincent', role: 'OPERATOR' }
    } catch (err) {
      console.log('err', err)
      throw new HttpException(err || 'Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001', HttpStatus.BAD_REQUEST)
    }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
