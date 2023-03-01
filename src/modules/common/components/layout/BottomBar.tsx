import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { Anchor, clsx, createStyles, Footer, Text } from '@mantine/core'
import mgwLogo from '@static/mgw.png'

const poppinsNormal = Poppins({ weight: '400', subsets: ['latin-ext'] })
const poppinsBold = Poppins({ weight: '600', subsets: ['latin-ext'] })

const useStyles = createStyles(() => ({
  footer: {
    backgroundColor: '#100011',
  },
  footerWrapper: {
    height: 'inherit',
  },
  link: {
    fontSize: '0.85rem',
    color: '#ababab',
    '&:hover, &:focus': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  copyright: {
    width: '100%',
    display: 'block',
  },
  siteName: {
    textTransform: 'uppercase',
    marginRight: '4px',
  },
  year: {},
}))

function BottomBar() {
  const { classes } = useStyles()

  return (
    <Footer height={80} className={classes.footer}>
      <div className={clsx('flex items-center px-4', classes.footerWrapper)}>
        <Image src={mgwLogo} alt={'Fioletowa litera M na ciemnym tle'} width={40} height={40} />
        <Anchor href={'/'} className={clsx('flex flex-wrap duration-100 ease-linear ml-2', classes.link)}>
          <Text className={clsx(classes.copyright, poppinsNormal.className)}>{'Wszelkie prawa zastrzeżone'}</Text>
          <Text className={clsx(classes.siteName, poppinsBold.className)}>{'MageGuildWars'}</Text>
          <Text className={poppinsNormal.className}>{'2023'}</Text>
        </Anchor>
      </div>
    </Footer>
  )
}

export default BottomBar
