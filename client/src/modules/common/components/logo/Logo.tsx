import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  logo: {
    width: 'auto',
    height: 50,
    [`@media screen and (min-width: 720px)`]: {
      width: 'auto',
      height: 60,
    },
    [`@media screen and (min-width: 960px)`]: {
      width: 320,
      height: 70,
    },
  },
}))

function Logo() {
  const { classes } = useStyles()

  return <img src={'https://i.imgur.com/anA1Lpw.png'} alt={'Mage Guild Wars'} className={classes.logo} />
}

export default Logo
