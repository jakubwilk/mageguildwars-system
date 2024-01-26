export interface IUser {
  uid: string
  login: string
  email: string
  group: UserGroupEnum
  title: string
  avatarUri: string
  registerDate: Date
  updateDate: Date
  profiles: Array<ICharacter>
  isLocked: boolean
  isBanned: boolean
}

export interface ICharacter {
  name: string
  place: string
  birthYear: string
  guild: GuildEnum
  group: CharacterGroupEnum
  imageUri: string
  titles: Array<string>
  magic: Array<string>
  skills: Array<string>
  weapons: Array<string>
  companions: Array<string>
}

export enum UserGroupEnum {
  BANNED,
  USER,
  OPERATOR,
  ROOT,
}

export enum CharacterGroupEnum {
  GUILD_MEMBER,
  GUILD_MASTER,
  MAGIC_COUNCIL_MEMBER,
  GAME_MASTER,
  EVENT_MASTER,
}

export enum GuildEnum {
  FAIRY_TAIL,
  LAMIA_SCALE,
  SABERTOOTH,
  GRIMOIRE_HEART,
  RAVEN_TAIL,
  PHANTOM_LORD,
  MAGIC_COUNCIL,
}

export enum UserMenuEnum {
  MAIN = 'MAIN',
  MGW = 'MGW',
}

export interface IUserMenu {
  type: UserMenuEnum
  name: string
  slug: string
}

export const USER_MENU_LINK_PLACEHOLDER_UID: string = ':uid'

export const USER_MAIN_MENU: Array<IUserMenu> = [
  {
    type: UserMenuEnum.MAIN,
    name: 'Podgląd konta',
    slug: USER_MENU_LINK_PLACEHOLDER_UID,
  },
  {
    type: UserMenuEnum.MAIN,
    name: 'Ustawienia',
    slug: `${USER_MENU_LINK_PLACEHOLDER_UID}/settings`,
  },
  {
    type: UserMenuEnum.MAIN,
    name: 'Powiadomienia',
    slug: `${USER_MENU_LINK_PLACEHOLDER_UID}/notifications`,
  },
  {
    type: UserMenuEnum.MAIN,
    name: 'Panel moderatora',
    slug: '/modcp',
  },
  {
    type: UserMenuEnum.MAIN,
    name: 'Panel administratora',
    slug: '/operator',
  },
  {
    type: UserMenuEnum.MGW,
    name: 'Dodaj nową postać',
    slug: `${USER_MENU_LINK_PLACEHOLDER_UID}/create`,
  },
  {
    type: UserMenuEnum.MGW,
    name: 'Panel Mistrza Gry',
    slug: '/mastercp',
  },
]
