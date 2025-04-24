import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
