import { FieldValues, useForm as useReactHookForm, UseFormProps } from 'react-hook-form'

interface IProps<T extends FieldValues> extends Omit<UseFormProps<T>, 'mode' | 'criteriaMode'> {}

export default function useForm<T extends FieldValues>({ ...props }: IProps<T>) {
  return useReactHookForm<T>({
    mode: 'onChange',
    criteriaMode: 'all',
    ...props
  })
}
