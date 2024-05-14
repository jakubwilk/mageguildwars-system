interface IProps {
  title?: string
  isRootPanel: boolean
}

export function MagicPage({ title, isRootPanel }: IProps) {
  console.log('isRootPanel', { title, isRootPanel })

  return <div>{'Magic page'}</div>
}
