'use client'

import { useMemo } from 'react'
import { Badge } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'

import { inputStyles } from '@/modules/common'

interface IProps {
  value: boolean
  label: string
}

const BooleanFieldInputValue = ({ value, label }: IProps) => {
  const iconProps = useMemo(() => ({ width: '100%', height: '100%' }), [])

  return (
    <Badge
      className={'px-2'}
      classNames={{ section: inputStyles.badgeWithIcon }}
      leftSection={value ? <IconCheck style={iconProps} /> : <IconX style={iconProps} />}
      color={value ? 'teal' : 'red'}
      size={'lg'}
    >
      {label}
    </Badge>
  )
}

export default BooleanFieldInputValue
