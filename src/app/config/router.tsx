import { createBrowserRouter } from 'react-router-dom'
import { RootPage } from 'administration/pages'
import { RootLayout } from 'common/layout'
import { routeKeys } from 'common/utils'
import { DashboardPage, DashboardUsersPage, HomePage } from 'pages'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { element: <HomePage />, path: routeKeys.HOME },
      {
        element: <RootPage />,
        children: [
          { element: <DashboardPage />, path: routeKeys.ROOT_PANEL },
          { element: <DashboardUsersPage />, path: routeKeys.ROOT_PANEL_USERS },
        ],
      },
    ],
  },
])
