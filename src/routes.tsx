import { RouteObject, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout/RootLayout'
import About from './pages/About'
import Home from './pages/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
