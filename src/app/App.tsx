import { RouterProvider } from 'react-router-dom'

import { APP_ROUTER } from './config'

export function App() {
  return <RouterProvider router={APP_ROUTER} />
}
