import { Fragment, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppLayoutContext } from '@common'
import { Button, createStyles, Divider } from '@mantine/core'
import { IconSquareArrowRight } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[9],
  },
  button: {
    color: theme.colors.gray[5],
    fontWeight: 600,
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][9],
      color: theme.white,
    },
    '& .mantine-Button-inner': {
      justifyContent: 'flex-start',
    },
  },
}))

function GuestUserNavigation() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { isSidebarOpen, setIsSidebarOpen } = useAppLayoutContext()

  const handleOpenAuthModalAndCloseSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen, setIsSidebarOpen])

  return (
    <Fragment>
      <Divider className={clsx('my-4', classes.line)} />
      <Button
        onClick={handleOpenAuthModalAndCloseSidebar}
        className={clsx('w-full duration-150', classes.button)}
        radius={'sm'}
        size={'md'}
        variant={'subtle'}
        leftIcon={<IconSquareArrowRight size={18} />}
      >
        {t('auth:action.goIntoSystem')}
      </Button>
    </Fragment>
  )
}

export default GuestUserNavigation
