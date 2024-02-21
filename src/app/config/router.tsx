import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../../modules/common/layout'
import { AuthPage, EditUserPage, HomePage } from '../pages'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/settings',
        element: <EditUserPage />,
      },
    ],
  },
  {
    element: <Root isAuthPage />,
    children: [
      {
        path: '/create-account',
        element: <AuthPage />,
      },
    ],
  },
])
