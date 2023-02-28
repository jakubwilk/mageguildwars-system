import Image from 'next/image'
import { createStyles } from '@mantine/core'
import logo from '@static/logo.png'

const useStyles = createStyles((theme) => ({
  logo: {
    height: 'auto',
    width: 140,
    [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
      height: 49,
      width: 210,
    },
    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
      height: 56,
      width: 240,
    },
    [`@media screen and (min-width: ${theme.breakpoints.lg}px`]: {
      height: 70,
      width: 300,
    },
  },
}))

function AppLogo() {
  const { classes } = useStyles()

  return <Image src={logo} alt={'Mage Guild Wars - PBF Fairy Tail'} className={classes.logo} />
}

export default AppLogo
