import { createBrowserRouter } from 'react-router-dom'
import { CreateAccountPage, HomePage, LoginAccountPage, RootPage, UserDashboardPage } from '@app/pages'
import { authRoutes } from '@auth'
import { commonRoutes } from '@common'
import { userRoutes } from '@user'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: commonRoutes.homePage(),
        element: <HomePage />,
      },
      {
        path: userRoutes.userDashboardPage(),
        element: <UserDashboardPage />,
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
