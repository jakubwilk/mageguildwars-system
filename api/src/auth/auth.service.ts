import { CreateAccountRequestParams } from '@auth/models'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async createPasswordHash(password: string) {
    try {
      return await argon2.hash(password)
    } catch (err) {
      console.log('err', err)
      return new HttpException('Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDAP_USERx001', HttpStatus.REQUEST_TIMEOUT)
    }
  }

  async createAccount({ login, email, password }: CreateAccountRequestParams) {
    console.log('login', login)
    console.log('email', email)
    await this.createPasswordHash(password)
    return { user: 'Vincent', role: 'OPERATOR' }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
