import { createBrowserRouter } from 'react-router-dom'

export const APP_ROUTES = createBrowserRouter([
  {
    // element: <RootPage />,
    children: [
      {
        // path: commonRoutes.homePage(),
        // element: <HomePage />,
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
