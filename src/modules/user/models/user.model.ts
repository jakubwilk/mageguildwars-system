import { MantineColor } from '@mantine/core'

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
  hasCreateProfileEnabled: boolean
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
  isGameMaster: boolean
}

export type TUserLite = Pick<
  IUser,
  'uid' | 'login' | 'group' | 'isLocked' | 'isBanned' | 'hasCreateProfileEnabled'
>

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
  NONE,
}

export enum GuildEnum {
  FAIRY_TAIL,
  LAMIA_SCALE,
  SABERTOOTH,
  GRIMOIRE_HEART,
  RAVEN_TAIL,
  PHANTOM_LORD,
  MAGIC_COUNCIL,
  GAME_MASTER,
  NONE,
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

export type TCharacterGuild = {
  name: string
  color: MantineColor
}

export const USER_MAIN_MENU: Array<IUserMenu> = [
  {
    type: UserMenuEnum.MAIN,
    name: 'Podgląd konta',
    slug: '/account',
  },
  {
    type: UserMenuEnum.MAIN,
    name: 'Powiadomienia',
    slug: '/account/notifications',
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
    slug: '/account/create',
  },
  {
    type: UserMenuEnum.MGW,
    name: 'Panel Mistrza Gry',
    slug: '/mastercp',
  },
]

export const EMPTY_PROFILE: ICharacter = {
  name: '',
  place: '',
  birthYear: '',
  guild: GuildEnum.NONE,
  group: CharacterGroupEnum.NONE,
  imageUri: '',
  titles: [],
  magic: [],
  skills: [],
  weapons: [],
  companions: [],
  isGameMaster: false,
}

// MOCK VALUES
export const MOCK_USER: IUser = {
  uid: '2b58f40c-edf4-4d53-9d41-22e5e9272b0a',
  login: 'Vincent',
  email: 'vincent@mageguildwars.pl',
  group: UserGroupEnum.OPERATOR,
  title: 'Administrator',
  avatarUri: '',
  registerDate: new Date(),
  updateDate: new Date(),
  profiles: [
    {
      name: 'Uchiha Shuto',
      place: 'Fiore',
      birthYear: 'Y21',
      guild: GuildEnum.FAIRY_TAIL,
      group: CharacterGroupEnum.GUILD_MEMBER,
      imageUri: '',
      titles: ['Członek gildii'],
      magic: [],
      skills: [],
      weapons: [],
      companions: [],
      isGameMaster: false,
    },
  ],
  isLocked: false,
  isBanned: false,
  hasCreateProfileEnabled: true,
}
// END
