import { useState } from 'react'
import './App.css'

import LoggedIn from './Components/LoggedIn'
import LoggedOut from './Components/LoggedOut'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <div>
        <button onClick={changeLoggedIn}>Change Logged In</button>
        <div>
          {
            isLoggedIn && <LoggedIn /> ||
            !isLoggedIn && <LoggedOut/>
          }
        </div>
      </div>
    </>
  )
}

export default App
