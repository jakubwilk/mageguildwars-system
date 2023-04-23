import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        RefreshTokenStrategy.extractJWT,
        ExtractJwt.fromExtractors([(req) => req.cookies['x-refresh-token']]),
      ]),
      secretOrKey: process.env['JWT_REFRESH_SECRET'],
      ignoreExpiration: false,
      passReqToCallback: true,
    })
  }

  validate(req: Request, payload: any) {
    const refreshToken = req.cookies['x-refresh-token']
    return { ...payload, refreshToken }
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'x-refresh-token' in req.cookies) {
      return req.cookies['x-refresh-token']
    }

    return null
  }
}
