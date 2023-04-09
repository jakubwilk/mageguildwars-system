import { AuthTokenPayload } from '@auth/models'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([AccessTokenStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: process.env['JWT_SECRET'],
    })
  }

  async validate(payload: AuthTokenPayload) {
    return { uid: payload.uid }
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'x-access-token' in req.cookies) {
      return req.cookies['x-access-token']
    }

    return null
  }
}
