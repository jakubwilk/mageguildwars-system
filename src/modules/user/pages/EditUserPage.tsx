import { EditEmailBlock, EditUserHeader } from '../components'

export function EditUserPage() {
  return (
    <main className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
      <EditUserHeader />
      <EditEmailBlock />
      <div>{'Edytuj hasło'}</div>
      <div>{'Informacje'}</div>
    </main>
  )
}
