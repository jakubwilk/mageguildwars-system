import { useTranslation } from 'react-i18next'
import { Button, createStyles } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.white,
    color: theme.colors.brand[5],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.brand[5],
      color: theme.white,
    },
  },
}))

function CreateNewProfileButton() {
  const { t } = useTranslation()
  const { classes } = useStyles()

  return <Button className={clsx(classes.button, 'duration-150 w-full md:w-auto')}>{t('profile:actions.addNewProfile')}</Button>
}

export default CreateNewProfileButton
