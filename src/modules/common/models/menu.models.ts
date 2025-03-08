export interface IHeaderMenu {
  name: string
  description?: string
  link: string
  title: string
  icon: HeaderMenuIconEnum
}

export enum HeaderMenuIconEnum {
  HOME = 'HOME',
  USERS = 'USERS',
  AWARDS = 'AWARDS',
}
