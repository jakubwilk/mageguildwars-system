import { ReactNode } from 'react'
import { Box, Text } from '@mantine/core'

interface IProps {
  title: string
  content: ReactNode
}

function RegisterRuleSection({ title, content }: IProps) {
  return (
    <Box>
      <Text fz={'xl'}>{title}</Text>
      {content}
    </Box>
  )
}

export default RegisterRuleSection
