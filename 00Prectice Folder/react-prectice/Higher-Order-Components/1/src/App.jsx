import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import withAuth from './HOC/withAuth'

function App() {

  //Enhanced Components (HOC)
  const AuthenticatedDashbaord = withAuth(Dashboard)
  const AuthenticatedProfile = withAuth(Profile)

  const router = createBrowserRouter([
    {
      path: '/',
      element:<div>
                <h1>Login Page</h1>
              </div>
    },
    {
      path: '/dashboard',
      element: <AuthenticatedDashbaord />
    },
    {
      path: '/profile',
      element: <AuthenticatedProfile />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
