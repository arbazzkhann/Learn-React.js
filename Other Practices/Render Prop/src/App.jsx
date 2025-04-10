import './App.css'
import MouseTracker from './Components/MouseTracker'

function App() {
  return (
    <>
      <MouseTracker 
        render={(X, Y) => {
          return <h1>Mouse Position: {X}, {Y}</h1>
        }}
      />
    </>
  )
}

export default App