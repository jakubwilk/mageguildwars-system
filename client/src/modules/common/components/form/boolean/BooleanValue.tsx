import { useTranslation } from 'react-i18next'
import { hexToRgb } from '@common'
import { Badge, createStyles, Text } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { isNil } from 'lodash'

const useStyles = createStyles((theme) => ({
  badge: {
    height: '1.5rem',
    '& > span': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  redBadge: {
    backgroundColor: `rgba(${hexToRgb(theme.colors.red[9])}, 0.25)`,
    color: theme.colors.red[5],
  },
  greenBadge: {
    backgroundColor: `rgba(${hexToRgb(theme.colors.green[9])}, 0.25)`,
    color: theme.colors.green[5],
  },
}))

interface IProps {
  value: boolean | undefined
  confirmText?: string
  negativeText?: string
  isGreenRedBadge?: boolean
}

function BooleanValue({ value, confirmText, negativeText, isGreenRedBadge }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()

  if (isNil(value)) {
    return <Text>{t('common:value.emptyMark')}</Text>
  }

  if (value) {
    return (
      <Badge
        variant={'light'}
        color={'green'}
        leftSection={<IconCheck size={18} strokeWidth={2} />}
        className={clsx(classes.badge, isGreenRedBadge && classes.greenBadge)}
      >
        {confirmText || t('common:value.yes')}
      </Badge>
    )
  }

  return (
    <Badge
      variant={'light'}
      color={'red'}
      leftSection={<IconX size={18} strokeWidth={2} />}
      className={clsx(classes.badge, isGreenRedBadge && classes.redBadge)}
    >
      {negativeText || t('common:value.no')}
    </Badge>
  )
}

export default BooleanValue
