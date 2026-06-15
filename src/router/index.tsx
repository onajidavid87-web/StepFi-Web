import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { Loans } from '../pages/Loans'
import { Reputation } from '../pages/Reputation'
import { Vendors } from '../pages/Vendors'
import { Apply } from '../pages/Apply'
import { Sponsors } from '../pages/Sponsors'
import { NotFound } from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/dashboard',
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: '/loans',
    element: <Layout><Loans /></Layout>,
  },
  {
    path: '/reputation',
    element: <Layout><Reputation /></Layout>,
  },
  {
    path: '/vendors',
    element: <Layout><Vendors /></Layout>,
  },
  {
    path: '/apply',
    element: <Layout><Apply /></Layout>,
  },
  {
    path: '/sponsors',
    element: <Layout><Sponsors /></Layout>,
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
