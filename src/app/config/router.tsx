import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../../modules/common/layout'
import { loadEnvVariable } from '../../modules/common/utils'
import { AdminPage, AuthPage, CharacterPage, EditUserPage, HomePage } from '../pages'

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
      {
        path: '/characters/:slug',
        element: <CharacterPage />,
      },
      {
        path: loadEnvVariable('VITE_ADMIN_PANEL_URL'),
        element: <AdminPage isRoot />,
      },
    ],
  },
  {
    element: <Root isAuthPage />,
    children: [
      {
        path: '/login',
        element: <AuthPage isLogin />,
      },
      {
        path: '/create-account',
        element: <AuthPage />,
      },
    ],
  },
])
