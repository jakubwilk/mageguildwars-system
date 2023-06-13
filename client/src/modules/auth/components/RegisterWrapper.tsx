import { ReactNode } from 'react'

interface IProps {
  form: ReactNode
  rules: ReactNode
}

function RegisterWrapper({ form, rules }: IProps) {
  return (
    <div className={'container mx-auto lg:min-h-screen h-full'}>
      <div className={'flex items-center justify-center h-[inherit] min-h-[inherit] flex-col md:flex-row'}>
        {rules}
        {form}
      </div>
    </div>
  )
}

export default RegisterWrapper
