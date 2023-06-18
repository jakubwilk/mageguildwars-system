import { ReactNode } from 'react'
import { Box, createStyles, Text } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[8],
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.dark[6],
  },
  title: {
    color: theme.colors.gray[6],
    textTransform: 'uppercase',
  },
}))

interface IProps {
  title: string
  children: ReactNode
}

function SettingsCard({ title, children }: IProps) {
  const { classes } = useStyles()

  return (
    <Box className={clsx('p-6', classes.card)}>
      <Text className={clsx(classes.title, 'mb-6')}>{title}</Text>
      {children}
    </Box>
  )
}

export default SettingsCard
