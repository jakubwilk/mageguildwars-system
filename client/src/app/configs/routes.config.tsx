import { createBrowserRouter } from 'react-router-dom'
import { HomePage, RootPage } from '@app/pages'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        // path: userRoutes.userDashboardPage(),
        // element: <UserDashboardPage />,
      },
    ],
  },
  {
    // path: authRoutes.loginPage(),
    // element: <LoginAccountPage />,
  },
  {
    // path: authRoutes.registerPage(),
    // element: <CreateAccountPage />,
  },
])
