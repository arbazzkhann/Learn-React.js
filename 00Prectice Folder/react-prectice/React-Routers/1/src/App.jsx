import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import User from './Components/User'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/contact',
      element: <><Navbar /><Contact /></>
    },
    {
      path: '/user/:userId',
      element: <User />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
