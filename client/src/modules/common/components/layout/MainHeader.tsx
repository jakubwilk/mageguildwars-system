import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  navigation: ReactNode
}

function MainHeader({ navigation }: IProps) {
  return (
    <div className={'flex items-center justify-between'}>
      <Link to={'/'}>
        <img src={'https://mageguildwars.pl/images/revolution/logo.png'} alt={'Mage Guild Wars'} />
      </Link>
      {navigation}
    </div>
  )
}

export default MainHeader
