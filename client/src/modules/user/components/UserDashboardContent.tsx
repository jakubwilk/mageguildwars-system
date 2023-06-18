import { useTranslation } from 'react-i18next'
import { Grid } from '@mantine/core'
import { SettingsCard, UserDetailsSection, UserSettingsSection } from '@user'

function UserDashboardContent() {
  const { t } = useTranslation()

  return (
    <div className={'mt-4 md:mt-8'}>
      <Grid gutter={'lg'} grow>
        <Grid.Col sm={7} md={8}>
          <SettingsCard title={t('user:section.details')}>
            <UserDetailsSection />
          </SettingsCard>
        </Grid.Col>
        <Grid.Col sm={5} md={4}>
          <SettingsCard title={t('user:section.settings')}>
            <UserSettingsSection />
          </SettingsCard>
        </Grid.Col>
        <Grid.Col span={12}>{'Profil 1'}</Grid.Col>
        <Grid.Col span={12}>{'Dodaj profil'}</Grid.Col>
      </Grid>
    </div>
  )
}

export default UserDashboardContent
