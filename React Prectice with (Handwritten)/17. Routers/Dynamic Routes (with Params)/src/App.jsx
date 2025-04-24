import './App.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About'

function UserProfile() {
  const {id} = useParams();
  return <h2>User ID: {id}</h2>
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/user/:id",
      element: <UserProfile />
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
