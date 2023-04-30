import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { createStyles, Footer, Text } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.night[6],
    borderColor: 'transparent',
  },
  text: {
    color: theme.colors.gray[6],
  },
}))

function AppFooter() {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <Footer height={80} className={clsx('relative w-full bottom-0 left-0 z-10', classes.footer)}>
      <div className={'container mx-auto h-full'}>
        <div className={'flex items-center justify-end px-4 h-full'}>
          <div className={clsx('flex flex-col text-right uppercase mr-4', classes.text)}>
            <Text fz={'xs'}>{t('common:copyright.allRightReversed')}</Text>
            <Text fz={'xs'}>{t('common:copyright.siteNameAndYear', { currentYear })}</Text>
          </div>
          <img src={'https://mageguildwars.pl/images/revolution/mgw.png'} alt={'Ikona Mage Guild Wars'} height={30} />
        </div>
      </div>
    </Footer>
  )
}

export default AppFooter
