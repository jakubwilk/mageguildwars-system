import { getTranslations } from '@modules/locale'
import { GuildEnum, TCharacterGuild, UserGroupEnum } from '@modules/user'

export const getGuildName = (guild: GuildEnum): TCharacterGuild => {
  const { translate } = getTranslations('profile')

  switch (guild) {
    case GuildEnum.FAIRY_TAIL:
      return {
        name: translate('guilds.fairyTail'),
        color: 'orange',
      }
    case GuildEnum.LAMIA_SCALE:
      return {
        name: translate('guilds.lamiaScale'),
        color: 'teal',
      }
    case GuildEnum.SABERTOOTH:
      return {
        name: translate('guilds.sabertooth'),
        color: 'yellow',
      }
    case GuildEnum.GRIMOIRE_HEART:
      return {
        name: translate('guilds.grimoireHeart'),
        color: 'red',
      }
    case GuildEnum.RAVEN_TAIL:
      return {
        name: translate('guilds.ravenTail'),
        color: 'indigo',
      }
    case GuildEnum.PHANTOM_LORD:
      return {
        name: translate('guilds.phantomLord'),
        color: 'grape',
      }
    case GuildEnum.OUTSIDER:
      return {
        name: translate('guilds.outsider'),
        color: 'rgba(207, 170, 112, 1)',
      }
    case GuildEnum.MAGIC_COUNCIL:
      return {
        name: translate('guilds.magicCouncil'),
        color: 'blue',
      }
    case GuildEnum.GAME_MASTER:
      return {
        name: translate('guilds.gameMaster'),
        color: 'cyan',
      }
    default:
      return {
        name: translate('guilds.noGuild'),
        color: 'gray',
      }
  }
}

export const getGroupName = (group: UserGroupEnum): TCharacterGuild => {
  const { translate } = getTranslations('account')

  switch (group) {
    case UserGroupEnum.BANNED:
      return {
        name: translate('groups.banned'),
        color: 'gray',
      }
    case UserGroupEnum.OPERATOR:
      return {
        name: translate('groups.operator'),
        color: 'rgba(133, 115, 88, 1)',
      }
    case UserGroupEnum.ROOT:
      return {
        name: translate('groups.root'),
        color: 'pink',
      }
    case UserGroupEnum.USER:
    default:
      return {
        name: translate('groups.user'),
        color: 'rgba(122, 122, 122, 1)',
      }
  }
}
