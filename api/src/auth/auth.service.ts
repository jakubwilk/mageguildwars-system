import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async createAccount(userData) {
    console.log('userData', userData)

    return { user: 'Vincent', role: 'OPERATOR' }
  }

  async endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
