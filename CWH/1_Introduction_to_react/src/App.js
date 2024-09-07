import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {

  const [value, setValue] = useState(0)

  return (
    <>
      <div>
          Value: {value}
          <button onClick={() => setValue(value + 1)}>Click me</button>

          <Navbar title="Hello i am Title" price="$199"/>    
      </div>
    </>
  );
}

export default App;
