import Home from './Components/Home';
import ProfilesPage from './Components/ProfilesPage';
import NotFoundPage from './Components/NotFoundPage';
import Profile from './Components/Profile';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/profiles',
      element: <ProfilesPage />
    },
    {
      path: '/profiles/:profileId',
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
