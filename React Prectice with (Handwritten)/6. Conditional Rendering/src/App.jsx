import './App.css'

function App() {
  const isLoggedIn = true;
  return (
    <>
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>}
      </div>
    </>
  )
}

export default App
