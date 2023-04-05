import { Input } from '@mantine/core'
import { useId } from '@mantine/hooks'

interface IProps {
  label: string
  name: string
  placeholder: string
  isRequired?: boolean
}

function TextField({ label, name, placeholder, isRequired }: IProps) {
  const id = useId()

  return (
    <Input.Wrapper id={id} label={label} required={isRequired}>
      <Input id={id} name={name} placeholder={placeholder} />
    </Input.Wrapper>
  )
}

export default TextField
