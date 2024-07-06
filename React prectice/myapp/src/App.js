import logo from './logo.svg';
import {useState} from 'react';
import './App.css';



function App() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    count++;
    setCount(count);
  }

  return (
    <div className="App">

      <h1>{count}</h1>
      <button onClick={increaseCount}>Click</button>

    </div>
  );
}

export default App;
