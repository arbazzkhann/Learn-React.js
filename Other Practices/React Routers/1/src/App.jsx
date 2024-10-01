import './App.css'
import Home from './Components/Home';
import ProfilesPage from './Components/ProfilesPage';
import NotFoundPage from './Components/NotFoundPage';
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
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
