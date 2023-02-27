import Image from 'next/image'
import logo from '@static/logo.png'

function AppLogo() {
  return <Image src={logo} alt={'Mage Guild Wars - PBF Fairy Tail'} height={70} width={320} />
}

export default AppLogo
