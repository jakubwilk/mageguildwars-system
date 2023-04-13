import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateOrLoginDialog } from '@auth'
import { createStyles, Divider, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSquareArrowRight } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[2],
  },
  button: {
    padding: '0.5rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  text: {
    fontSize: '0.85rem',
  },
}))

function GuestUserNavigation() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Divider className={clsx('my-4', classes.line)} />
      <UnstyledButton onClick={open} className={clsx('w-full duration-150', classes.button)}>
        <Group>
          <ThemeIcon variant={'light'} color={'grape'}>
            <IconSquareArrowRight size={18} />
          </ThemeIcon>
          <Text className={clsx('uppercase', classes.text)}>{t('auth:action.goIntoSystem')}</Text>
        </Group>
      </UnstyledButton>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default GuestUserNavigation
