import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import ErrorPage from "./Components/ErrorPage"
import { createBrowserRouter , RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: '/' ,
      element: <div><Navbar/><Home /></div>,
      errorElement: <div><Navbar/><ErrorPage /></div>
    },
    {
      path: '/contact',
      element: <div><Navbar/><Contact /></div>
    },
    {
      path: '/about',
      element: <div><About /></div>
    }
  ])

  return (
    <> 
      <RouterProvider router={router}/>
    </>
  )
}

export default App
