import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<div>
                <h1>Login Page</h1>
              </div>
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
