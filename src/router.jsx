import { createBrowserRouter } from 'react-router-dom'
import route from './config/route'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
    errorElement: (
      <App error />
    ),
    children: [
      ...route
    ]
  }
])

export default router
