import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from 'common/layout'
import { routeKeys } from 'common/utils'
import { HomePage, RootPage } from 'pages'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { element: <HomePage />, path: routeKeys.HOME },
      { element: <RootPage />, path: routeKeys.ROOT_PANEL },
    ],
  },
])
