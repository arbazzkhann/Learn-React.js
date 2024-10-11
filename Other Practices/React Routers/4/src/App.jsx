import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Users from './Components/Users'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Navbar /><Home /></div>
    },
    {
      path: "/about",
      element: <div><Navbar /><About /></div>
    },
    {
      path: "/contact",
      element: <div><Navbar /><Contact /></div>
    },
    {
      path: "/user/:userId",
      element: <div><Users /></div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
