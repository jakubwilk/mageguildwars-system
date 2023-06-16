import { createBrowserRouter } from 'react-router-dom'
import { CreateAccountPage, HomePage, LoginAccountPage, RootPage } from '@app/pages'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/account-login',
    element: <LoginAccountPage />,
  },
  {
    path: '/account-create',
    element: <CreateAccountPage />,
  },
])
