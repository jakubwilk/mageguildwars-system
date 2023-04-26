import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { createStyles, Text } from '@mantine/core'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import hexToRgba from 'hex-to-rgba'

import { SingleFeaturePanel } from '../models'

const useStyles = createStyles((theme) => ({
  cover: {
    '&::after': {
      position: 'absolute',
      content: "''",
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 20,
      backgroundColor: hexToRgba(theme.colors.night[9], 0.7),
      transition: 'background-color .150s ease-in-out',
    },
  },
  link: {
    display: 'block',
    border: `1px solid ${theme.colors.gray[9]}`,
    textDecoration: 'none',
    '&:hover > .cover-overlay::after, &:focus > .cover-overlay::after': {
      backgroundColor: hexToRgba(theme.colors.night[9], 0.55),
    },
  },
  title: {
    fontFamily: theme.headings.fontFamily,
    fontSize: '1.25rem',
    color: theme.colors.gray[4],
  },
  description: {
    color: theme.colors.gray[6],
  },
  date: {
    marginTop: 16,
    display: 'block',
    textAlign: 'right',
    color: theme.colors.gray[6],
  },
}))

interface IProps extends SingleFeaturePanel {
  isCompact: boolean
}

function FeatureSinglePanel({ link, title, description, created, coverImageUrl, isCompact }: IProps) {
  const { classes } = useStyles()

  const renderDate = useCallback((date: Date) => {
    return format(new Date(date), 'dd MMMM yyyy')
  }, [])

  return (
    <Link to={link} className={clsx('relative', !isCompact ? 'h-[150px]' : 'h-[250px]', classes.link)}>
      <div className={clsx('relative flex flex-col justify-end z-30', !isCompact ? 'p-4' : 'p-6', !isCompact ? 'h-[150px]' : 'h-[250px]')}>
        <Text fw={700} className={clsx('uppercase', isCompact && 'mb-2', classes.title)}>
          {title}
        </Text>
        {isCompact ? <Text className={classes.description}>{description}</Text> : null}
        <Text size={'sm'} className={classes.date}>
          {renderDate(created)}
        </Text>
      </div>
      <div
        className={clsx('cover-overlay absolute bg-cover bg-center h-full w-full top-0 left-0', classes.cover)}
        style={{ backgroundImage: `url(${coverImageUrl})` }}
      />
    </Link>
  )
}

export default FeatureSinglePanel
