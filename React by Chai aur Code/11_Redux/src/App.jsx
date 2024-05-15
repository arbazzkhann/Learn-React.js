import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <Navbar counter={count} math={"HELLO"}/>
      <div>
        {count}
      </div>
    </>
  )
}

export default App
