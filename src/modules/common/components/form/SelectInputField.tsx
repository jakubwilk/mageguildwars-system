import { useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Combobox,
  ComboboxProps,
  Input,
  InputBase,
  Text,
  useCombobox,
} from '@mantine/core'
import { ISelectOption } from 'common/models'
import { isNil } from 'lodash'

import '@mantine/core/styles/Combobox.layer.css'
import '@mantine/core/styles/Input.layer.css'
import classes from './Form.module.css'

type TFormValue = string | number | boolean | undefined

interface IProps extends ComboboxProps {
  name: string
  value?: TFormValue
  description?: string
  className?: string
  error?: string
  label: string
  options: ISelectOption[]
  handleChange?: (value: TFormValue) => void
  isControlled?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SelectInputField({
  name,
  value,
  description,
  className,
  error,
  label,
  options,
  handleChange,
  isControlled = true,
  isRequired,
  isDisabled,
}: IProps) {
  const formContext = useFormContext()

  const [selectedOption, setSelectedOption] = useState<TFormValue>(undefined)
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() })

  console.log('selectedOption', selectedOption)

  const pickedOption = useMemo(() => {
    if (selectedOption !== undefined) {
      return options.find((item) => item.value === selectedOption)
    }

    return undefined
  }, [options, selectedOption])

  const selectOptions = useMemo(
    () =>
      options.map((item) => (
        // Component 'Combobox.Option' as 'value' can get only string so this is a reason of using 'as'
        <Combobox.Option key={item.id} value={item.value as string}>
          <Text className={classes.selectOptionText}>{item.label}</Text>
        </Combobox.Option>
      )),
    [options],
  )

  const handleOptionSubmit = useCallback(
    (value: TFormValue) => {
      setSelectedOption(value)
      handleChange?.(value)
      combobox.closeDropdown()
    },
    [combobox, handleChange],
  )

  useEffect(() => {
    if (value === undefined) {
      setSelectedOption(undefined)
    } else {
      setSelectedOption(value)
    }
  }, [value])

  if (isControlled && formContext) {
    return (
      <div className={className}>
        <Controller
          control={formContext.control}
          name={name}
          render={({ field: { name, value, onChange }, fieldState: { error } }) => (
            <Combobox
              onOptionSubmit={(val) => {
                handleOptionSubmit(val)
                onChange(val)
              }}
              store={combobox}
              withinPortal={false}
            >
              <Combobox.Target>
                <InputBase
                  classNames={{
                    root: classes.root,
                    label: classes.label,
                    description: classes.description,
                  }}
                  component={'button'}
                  description={description}
                  {...(!isNil(error) && { error: error.message })}
                  disabled={isDisabled}
                  label={label}
                  multiline
                  name={name}
                  onClick={() => combobox.toggleDropdown()}
                  pointer
                  required={isRequired}
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents={'none'}
                  type={'button'}
                >
                  {value ? (
                    <Text className={classes.selectOptionText}>{value.label}</Text>
                  ) : (
                    <Input.Placeholder>{'Wybierz wartość'}</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>
              <Combobox.Dropdown>
                <Combobox.Options>{selectOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          )}
        />
      </div>
    )
  }

  return (
    <div className={className}>
      <Combobox onOptionSubmit={handleOptionSubmit} store={combobox} withinPortal={false}>
        <Combobox.Target>
          <InputBase
            classNames={{
              root: classes.root,
              label: classes.label,
              description: classes.description,
            }}
            component={'button'}
            description={description}
            label={label}
            multiline
            onClick={() => combobox.toggleDropdown()}
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents={'none'}
            type={'button'}
            {...(!isNil(error) && { error })}
          >
            {pickedOption ? (
              <Text className={classes.selectOptionText}>{pickedOption.label}</Text>
            ) : (
              <Input.Placeholder>{'Wybierz wartość'}</Input.Placeholder>
            )}
          </InputBase>
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>{selectOptions}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  )
}
