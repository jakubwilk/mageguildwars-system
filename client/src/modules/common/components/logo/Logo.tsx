import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mantine/core'

import logoImage from '../../../../assets/images/logo.png'

interface IProps {
  tooltipText?: string
  logoImageUrl?: string
}

function Logo({ tooltipText, logoImageUrl }: IProps) {
  const [t] = useTranslation()

  const labelText = useMemo(() => tooltipText || t('home:tooltip.backToHome'), [t, tooltipText])
  const image = useMemo(() => logoImageUrl || logoImage, [logoImageUrl])

  return (
    <Tooltip label={labelText} position={'bottom'}>
      <Link to={'/'}>
        <img src={image} alt={''} />
      </Link>
    </Tooltip>
  )
}

export default Logo
