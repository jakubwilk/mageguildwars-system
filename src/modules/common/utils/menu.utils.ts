import { HeaderMenuIconEnum, IHeaderMenu } from 'common/models'

export const HEADER_MENU: IHeaderMenu[] = [
  {
    name: 'Strona główna',
    link: '/',
    title: 'Przejdź do strony głównej',
    icon: HeaderMenuIconEnum.HOME,
  },
  {
    name: 'Użytkownicy',
    link: '/users',
    title: 'Przejdź do listy użytkowników',
    icon: HeaderMenuIconEnum.USERS,
  },
  {
    name: 'Osiągnięcia',
    link: '/awards',
    title: 'Przejdź do listy osiągnięć',
    icon: HeaderMenuIconEnum.AWARDS,
  },
]
