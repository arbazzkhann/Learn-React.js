import React, { lazy, Suspense } from 'react'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import Home from './Components/Home'
// import Contact from './Components/Contact'

import Navbar from './Components/Navbar';

const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
// const Extra = lazy(() => import('./Components/Extra'));
const Extra = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      import('./Components/Extra').then((module) => {
        console.log('Component loaded:', module); // optional logging
        resolve(module);
      });
    }, 3000); // 3 seconds delay
  })
);




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense>
    },
    {
      path: '/contact',
      element: <Suspense fallback={<p>Loading...</p>}><Contact /></Suspense>
    },
    {
      path: '/about',
      element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>
    },
    {
      path: '/extra',
      element: 
        <div>
          <Navbar />
          <Suspense fallback={<p>Loading...</p>}>
            <Extra />
          </Suspense>
        </div>
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
