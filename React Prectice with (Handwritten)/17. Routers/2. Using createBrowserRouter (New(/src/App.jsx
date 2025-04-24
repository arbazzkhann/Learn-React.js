import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ])

  return (
    <>
      <div>
        <Navbar />
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
