import { createBrowserRouter } from 'react-router-dom'
import { CreateAccountPage, ForumPage, RootPage, UserPage } from '@app/pages'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <ForumPage />,
      },
      {
        path: '/user-panel',
        element: <UserPage />,
      },
    ],
  },
  {
    path: '/account-create',
    element: <CreateAccountPage />,
  },
])
