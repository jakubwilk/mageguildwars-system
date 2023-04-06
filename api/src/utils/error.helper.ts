import { HttpException, HttpStatus } from '@nestjs/common'

export function HttpError(status: HttpStatus, message?: string) {
  return new HttpException(message || null, status)
}

export const ERROR_MESSAGES = {
  USER_EXIST: 'Użytkownik z taką nazwą już istnieje w systemie',
  EMAIL_EXIST: 'Podany adres email jest używany przez innego użytkownika',
  LDE_USER_1: 'Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx001',
  LDE_USER_2: 'Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx002',
  LDE_USER_3: 'Wystąpił błąd przy tworzeniu konta użytkownika. Kod błędu: LDE_USERx003',
}
