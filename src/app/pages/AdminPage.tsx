import { AdminPage as AdminModulePage } from '../../modules/admin/pages'

interface IProps {
  isRoot?: boolean
}

export function AdminPage({ isRoot }: IProps) {
  return <AdminModulePage isRoot={isRoot} />
}
