import { HttpException, HttpStatus } from '@nestjs/common'

export function HttpError(status: HttpStatus, message?: string) {
  return new HttpException(message || null, status, { cause: new Error(message) })
}

export const ERROR_MESSAGES = {
  AUTH: {
    WRONG_DATA: 'Błąd dancyh wejściowych. Wprowadzono niepoprawne dane.',
    WRONG_LOGIN_DATA: 'Wprowadzono błędne dane logowania. Sprawdź login lub hasło.',
    NO_ACCESS: 'Brak dostępu do żądanego zasobu.',
    ISSUE_WITH_CREATE_SESSION: 'Wystąpił problem z utworzeniem sesji użytkownika. Skontaktuj się z administratorem.',
    ISSUE_WITH_CREATE_USER: 'Wystąpił wewnętrzny problem podczas tworzenia nowego konta. Skontaktuj się z administratorem.',
  },
  CRYPTO: {
    ISSUE_WITH_CREATE_HASH: 'Serwer napotkał wewnątrzny problem. Skontaktuj się z administratorem serwisu. Kod błędu: XAUTH_92238',
    ISSUE_WITH_CREATE_ACCESS_TOKEN:
      'Serwer napotkał wewnątrzny problem. Skontaktuj się z administratorem serwisu. Kod błędu: XAUTH_9233120',
    ISSUE_WITH_CREATE_REFRESH_TOKEN:
      'Serwer napotkał wewnątrzny problem. Skontaktuj się z administratorem serwisu. Kod błędu: XAUTH_92331820',
    ISSUE_WITH_UPDATE_REFRESH_TOKEN:
      'Serwer napotkał wewnątrzny problem. Skontaktuj się z administratorem serwisu. Kod błędu: XAUTH_923211820',
  },
  USER: {
    USER_EXIST:
      'Wykryto w systemie użytkownika z podanymi danymi. Jeżeli to Twoje konto, proszę się na nie zalogować lub przypomnieć hasło.',
    MISSING_USER: 'Brak użytkownika w systemie. Proszę się upewnić, że podano poprawne dane.',
    ISSUE_WITH_GET_USER_DATA: 'Serwer napotkał wewnątrzny problem. Skontaktuj się z administratorem serwisu. Kod błędu: XAUTH_9237214',
  },
  PROFILE: {
    NO_MORE_PROFILES: 'Nie można dodać nowego profilu. Osiągnięto maksymalną liczbę dostępnych profili dla pojedynczego konta.',
    ISSUE_WITH_CREATE_PROFILE: 'Wystąpił wewnętrzny problem podczas tworzenia nowego profilu. Skontaktuj się z administratorem.',
    PROFILE_WITH_NAME_EXIST: 'Istnieje już profil o takiej nazwie. Proszę wybrać inne imię dla swojej postaci.',
    ISSUE_WITH_GET_PROFILES:
      'Wystąpił problem z pobiraniem wszystkich profili przypisanych do konta. Skontaktuj się z administratorem serwisu.',
  },
}
