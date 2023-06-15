import { createBrowserRouter } from 'react-router-dom'
import { RootPage } from '@app/pages'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [],
  },
  {
    path: '/account-create',
    element: null,
  },
])
