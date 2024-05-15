import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  if(counter < 0) {

  }

  function addValue() {
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } 
    else {
      setCounter(counter);
      }
    }
  
  function removeValue() {
    if(counter <= 0) {
      setCounter(counter);
    }
    else {
      counter = counter - 1;
      setCounter(counter);
      }
    }

  return (
    <>
      <h1>ARBAZ KHAN</h1>
      <h2>COUNTER PROJECT</h2>
        <label>Counter : {counter}</label> <br/>
        <button onClick={addValue}>Add Value</button> <br/>
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;







// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [inputValue, setInputValue] = useState("ARBAZ KHAN");

//   let onChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//   }

//   return (
//     <>
//       <h1>{inputValue}</h1>
//       <form>
//           <input type="text" onChange={onChange} placeholder="Input something..." value={inputValue}></input>
//       </form>
//     </>
//   )
// }

// export default App;