import React from 'react'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
