import Card from './Components/Card'
import { useState } from "react"

function App() {

  let [value, setValue] = useState(0)
    
  function increaseVal() {
      value++;
      setValue(value);
  }


  return (
    <div className="App">
      <h1>Hello</h1>
      <Card value={value}/>
      <button onClick={increaseVal}>Click me!</button>
    </div>
  );
}

export default App;
