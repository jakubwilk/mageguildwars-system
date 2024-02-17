import { getResources } from '../config'
import { AuthResourcesEnum } from '../constants'

export type TResourcePrefix = keyof ReturnType<typeof getResources>
export type TResourceSuffix = keyof typeof AuthResourcesEnum
