import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  createAccount(userData) {
    console.log('userData', userData)

    return { user: 'Vincent', role: 'OPERATOR' }
  }

  endSession(userId: string) {
    console.log('userId', userId)

    return { status: 200 }
  }
}
