import { createBrowserRouter } from 'react-router-dom'
import { CreateAccountPage, HomePage, LoginAccountPage, RootPage } from '@app/pages'
import { authRoutes } from '@auth'
import { commonRoutes } from '@common'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: commonRoutes.homePage(),
        element: <HomePage />,
      },
    ],
  },
  {
    path: authRoutes.loginPage(),
    element: <LoginAccountPage />,
  },
  {
    path: authRoutes.registerPage(),
    element: <CreateAccountPage />,
  },
])
