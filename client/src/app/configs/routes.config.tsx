import { createBrowserRouter } from 'react-router-dom'
import { ForumPage } from '@app/pages'
import { LayoutContainer } from '@common'

export const APP_ROUTES = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutContainer>
        <ForumPage />
      </LayoutContainer>
    ),
  },
])
