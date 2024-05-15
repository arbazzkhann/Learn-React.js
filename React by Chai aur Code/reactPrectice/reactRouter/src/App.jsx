import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    },
    {
      path: '/contact',
      element: <><Navbar /> <Contact /></>
    }
  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
