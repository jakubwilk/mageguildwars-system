interface IProps {
  isRoot?: boolean
}

export function AdminPage({ isRoot }: IProps) {
  console.log('isRoot', isRoot)

  return <div>{'admin page'}</div>
}
