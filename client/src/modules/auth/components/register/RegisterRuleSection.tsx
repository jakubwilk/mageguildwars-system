import { ReactNode } from 'react'
import { Box, createStyles, Text } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  ruleTitle: {
    color: theme.colors.gray[5],
  },
}))

interface IProps {
  title: string
  content: ReactNode
}

function RegisterRuleSection({ title, content }: IProps) {
  const { classes } = useStyles()

  return (
    <Box>
      <Text fz={'xl'} className={clsx('ml-8', classes.ruleTitle)}>
        {title}
      </Text>
      {content}
    </Box>
  )
}

export default RegisterRuleSection
