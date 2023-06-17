import { AuthCreateUserSnapshot } from '@auth/models'
import { Response } from 'express'

export const AUTH_COOKIE_NAME = {
  ACCESS_TOKEN: 'x-access-token',
  REFRESH_TOKEN: 'x-refresh-token',
}

export const DEFAULT_ACCESS_TOKEN_OPTIONS = {
  httpOnly: true,
  expires: new Date(Date.now() + 21600000),
}

export const DEFAULT_REFRESH_TOKEN_OPTIONS = {
  httpOnly: true,
  expires: new Date(Date.now() + 604800000),
}

export const responseWithUserDataAndTokens = (data: AuthCreateUserSnapshot, res: Response) => {
  return res
    .cookie(AUTH_COOKIE_NAME.ACCESS_TOKEN, data.accessToken, { ...DEFAULT_ACCESS_TOKEN_OPTIONS })
    .cookie(AUTH_COOKIE_NAME.REFRESH_TOKEN, data.refreshToken, { ...DEFAULT_REFRESH_TOKEN_OPTIONS })
    .json({ user: { ...data.user }, refreshToken: data.refreshToken })
}
