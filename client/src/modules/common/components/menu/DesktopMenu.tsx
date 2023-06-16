import { Link } from 'react-router-dom'
import { useAppConfigContext } from '@common'
import { Button, createStyles, Menu, Skeleton, Tooltip } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  skeleton: {
    '&::after': {
      background: theme.colors.dark[4],
    },
    '&::before': {
      background: theme.colors.dark[6],
    },
  },
  menuItem: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[3],
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.colors.indigo[5],
    },
  },
  menuDropdown: {
    backgroundColor: theme.colors.dark[5],
    borderColor: theme.colors.dark[3],
  },
  menuDropdownItem: {
    color: theme.colors.gray[3],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.dark[3],
    },
  },
}))

function DesktopMenu() {
  const { mainNavigation, isMainNavigationLoading } = useAppConfigContext()
  const { classes } = useStyles()

  return (
    <div className={'flex items-center'}>
      {isMainNavigationLoading ? (
        <Skeleton height={30} width={'50%'} radius={'sm'} className={classes.skeleton} />
      ) : (
        mainNavigation.map(({ id, title, children }) => (
          <Menu key={id} width={200} openDelay={100} closeDelay={100}>
            <Menu.Target>
              <Button variant={'subtle'} className={clsx('duration-100 p-0 h-auto mr-8', classes.menuItem)}>
                {title}
              </Button>
            </Menu.Target>
            <Menu.Dropdown className={classes.menuDropdown}>
              {children.map(({ id: childId, title, label, href }) => (
                <Tooltip key={childId} label={label} position={'bottom'} width={250} multiline>
                  <Menu.Item component={Link} to={href} className={clsx('duration-100', classes.menuDropdownItem)}>
                    {title}
                  </Menu.Item>
                </Tooltip>
              ))}
            </Menu.Dropdown>
          </Menu>
        ))
      )}
    </div>
  )
}

export default DesktopMenu
