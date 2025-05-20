import { useState } from 'react'
import './App.css'

import LoggedIn from './Components/LoggedIn'
import LoggedOut from './Components/LoggedOut'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  if(isLoggedIn) {
    return (
      <>
        <button onClick={changeLoggedIn}>Change Logged</button>
        <LoggedIn/>
      </>
    )
  }
  else {
      return (
        <>
          <button onClick={changeLoggedIn}>Change Logged</button>
          <LoggedOut/>
        </>
      )
  }
}

export default App
