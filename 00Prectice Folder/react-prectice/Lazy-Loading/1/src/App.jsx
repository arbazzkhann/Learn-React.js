import React, { lazy, Suspense } from 'react'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import Home from './Components/Home'
// import Contact from './Components/Contact'

const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback="<p>Loading...</p>"><Home /></Suspense>
    },
    {
      path: '/contact',
      element: <Suspense fallback="<p>Loading...</p>"><Contact /></Suspense>
    },
    {
      path: '/about',
      element: <Suspense fallback="<p>Loading...</p>"><About /></Suspense>
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
