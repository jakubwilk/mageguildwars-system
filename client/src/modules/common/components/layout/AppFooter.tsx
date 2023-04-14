import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Footer, Text } from '@mantine/core'

function AppFooter() {
  const { t } = useTranslation()
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <Footer height={80} className={'absolute w-full bottom-0 left-0 z-10'}>
      <div className={'container mx-auto h-full'}>
        <div className={'flex items-center justify-end px-4 h-full'}>
          <div className={'flex flex-col text-right uppercase mr-4'}>
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
