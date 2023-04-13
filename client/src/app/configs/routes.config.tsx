import { createBrowserRouter } from 'react-router-dom'
import { ForumPage } from '@app/pages'

import { RootPage } from '../pages/root'

export const APP_ROUTES = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <ForumPage />,
      },
    ],
  },
])
