import {
  EditEmailBlock,
  EditPasswordBlock,
  EditUserHeader,
  EditUserInformationBlock,
} from '../components'

export function EditUserPage() {
  return (
    <main className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'}>
      <EditUserHeader />
      <EditEmailBlock />
      <EditPasswordBlock />
      <EditUserInformationBlock />
    </main>
  )
}
