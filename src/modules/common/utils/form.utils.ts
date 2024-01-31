import { getTranslations } from '@modules/locale'

export const convertBooleanValueToText = (value: boolean): string => {
  const { translate } = getTranslations('global')

  return value ? translate('fields.yes') : translate('fields.no')
}
