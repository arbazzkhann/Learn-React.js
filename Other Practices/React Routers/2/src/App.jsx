import './App.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import HomePage from './Components/HomePage'
import ErrorPage from './Components/ErrorPage'
import ProfilesPage from './Components/ProfilesPage'
import Profile from './Components/Profile'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage/>
    },
    {
      path: 'profiles',
      element: <ProfilesPage/>
    },
    {
      path: 'profile/:profileId',
      element: <Profile />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
