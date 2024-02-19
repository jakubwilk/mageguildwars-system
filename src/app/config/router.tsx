import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../../modules/common/layout'
import { AuthPage, HomePage } from '../pages'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
