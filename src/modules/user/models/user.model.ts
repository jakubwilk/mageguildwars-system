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
  titles: Array<string>
  magic: Array<string>
  skills: Array<string>
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
