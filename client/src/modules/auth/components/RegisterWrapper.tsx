import { ReactNode } from 'react'

interface IProps {
  form: ReactNode
  rules: ReactNode
}

function RegisterWrapper({ form, rules }: IProps) {
  return (
    <div className={'container mx-auto h-full my-8'}>
      <div className={'flex items-start justify-start h-[inherit] min-h-[inherit] flex-col md:flex-row-reverse'}>
        {rules}
        {form}
      </div>
    </div>
  )
}

export default RegisterWrapper
