import React from 'react'
import wallpaper from "./assets/images/wallpaper.jpg"
import avengers from "./assets/images/avengers.jpg"
import "./style.css"

function App() {
  return (
    <>
      <img className="wallpaper" src={wallpaper} alt="Wallpaper"/>
      <img className="avengers" src={avengers} alt="avengers"/>
      <div>Hello App</div>
    </>
  )
}

export default App