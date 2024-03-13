import { useMemo } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  isExpanded: boolean
  onClick?: () => void
}

export function Logo({ isExpanded, onClick }: IProps) {
  const logoClassName = useMemo(() => {
    if (isExpanded) {
      return 'w-full max-w-[270px]'
    }

    return 'w-[40px]'
  }, [isExpanded])

  return (
    <div className={'relative'}>
      <Link
        className={'flex items-center justify-center'}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
        to={'/'}
      >
        <img
          alt={'Logo Mage Guild Wars'}
          className={logoClassName}
          src={
            isExpanded
              ? 'https://mageguildwars.pl/images/mgw_modern/logo.png'
              : 'https://i.imgur.com/o9BN1ol.png'
          }
        />
      </Link>
    </div>
  )
}
