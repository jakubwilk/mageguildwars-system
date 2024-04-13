import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from 'common/layout'
import { routeEnum } from 'common/utils'
import { HomePage } from 'pages'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ element: <HomePage />, path: routeEnum.HOME }],
  },
])
