import { AppLayout, PageContainer } from '@modules/common'

export const generateMetadata = async () => {
  return {
    title: 'Panel administratora Mage Guild Wars',
  }
}

export default function OperatorPanel() {
  return (
    <AppLayout>
      <PageContainer>
        <p>{'Operator panel'}</p>
      </PageContainer>
    </AppLayout>
  )
}
