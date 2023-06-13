import { ReactNode } from 'react'
import { RegisterRuleSection } from '@auth'
import { Box, createStyles, Divider, ScrollArea, Text } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.dark[8],
  },
  divider: {
    borderColor: theme.colors.dark[6],
  },
  title: {
    color: theme.colors.gray[5],
    fontSize: '2rem !important',
  },
}))

interface IProps {
  formCheckbox?: ReactNode
}

function RegisterRules({ formCheckbox }: IProps) {
  const { classes } = useStyles()

  return (
    <Box className={clsx('w-full p-4 md:p-8 rounded-md h-full md:max-h-[80vh]', classes.content)}>
      <Text component={'h2'} ta={'center'} fz={'xl'} tt={'uppercase'} fw={700} className={classes.title}>
        {'Regulamin systemu Mage Guild Wars'}
      </Text>
      <Divider my={'lg'} className={classes.divider} />
      <ScrollArea.Autosize mah={'70vh'}>
        <RegisterRuleSection title={'1. Postanowienia ogólne'} content={<p>{'Lorem ipsum'}</p>} />
      </ScrollArea.Autosize>
    </Box>
  )
}

export default RegisterRules
