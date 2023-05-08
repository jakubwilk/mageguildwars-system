import { BaseTitle } from '.prisma/client'

export interface ProfileSnapshot {
  id: number
  uid: string
  name: string
  slug: string
  role: ProfileRole
  title: BaseTitle
  additionalTitle: string
  avatarUrl: string | null
  signature: string | null
  createdAt: Date
  updatedAt: Date
}

export enum ProfileRole {
  // eslint-disable-next-line no-unused-vars
  NONE = 'NONE',
  // eslint-disable-next-line no-unused-vars
  FAIRY_TAIL = 'FAIRY_TAIL',
  // eslint-disable-next-line no-unused-vars
  LAMIA_SCALE = 'LAMIA_SCALE',
  // eslint-disable-next-line no-unused-vars
  BLUE_PEGASUS = 'BLUE_PEGASUS',
  // eslint-disable-next-line no-unused-vars
  GRIMOIRE_HEART = 'GRIMOIRE_HEART',
  // eslint-disable-next-line no-unused-vars
  RAVEN_TAIL = 'RAVEN_TAIL',
  // eslint-disable-next-line no-unused-vars
  ORACION_SEIS = 'ORACION_SEIS',
  // eslint-disable-next-line no-unused-vars
  MAGIC_COUNCIL = 'MAGIC_COUNCIL',
  // eslint-disable-next-line no-unused-vars
  GAME_MASTER = 'GAME_MASTER',
  // eslint-disable-next-line no-unused-vars
  EVENT_MASTER = 'EVENT_MASTER',
}
