import { Grid } from '@mantine/core'
import { SettingsCard, UserDetailsSection } from '@user'

function UserDashboardContent() {
  return (
    <div className={'mt-4 md:mt-8'}>
      <Grid gutter={'lg'} grow>
        <Grid.Col sm={7} md={8}>
          <SettingsCard title={'Informacje'}>
            <UserDetailsSection />
          </SettingsCard>
        </Grid.Col>
        <Grid.Col sm={5} md={4}>
          <SettingsCard title={'Ustawienia'}>
            <p>{'Zmień hasło'}</p>
            <p>{'Zmień email'}</p>
            <p>{'Anonimizuj dane'}</p>
          </SettingsCard>
        </Grid.Col>
        <Grid.Col span={12}>{'Profil 1'}</Grid.Col>
        <Grid.Col span={12}>{'Dodaj profil'}</Grid.Col>
      </Grid>
    </div>
  )
}

export default UserDashboardContent
