import React from 'react';

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Users from './Components/Users'

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div><Navbar /><Home /></div>
    },
    {
      path: '/about',
      element: <div><Navbar /><About /></div>
    },
    {
      path: '/services',
      element: <div><Navbar /><Services /></div>
    },
    {
      path: '/contact',
      element: <div><Navbar /><Contact /></div>
    },
    {
      path: '/user/:user',
      element: <div><Navbar /><Users /></div>
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
