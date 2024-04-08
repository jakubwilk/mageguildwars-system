import { createBrowserRouter } from 'react-router-dom'

export const APP_ROUTER = createBrowserRouter([
  {
    element: <div>{'test'}</div>,
    children: [{ element: <div>{'123'}</div>, path: '/' }],
  },
])
