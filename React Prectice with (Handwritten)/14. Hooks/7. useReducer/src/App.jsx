import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //code 1
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'Increment': return {count: state.count + 1};
  //     default: return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, {count: 0});

  //code 2
  // --------------------------------------------------------------
  /*
  Syntax:
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    reducerFunction(currentState, action) {
    }
  */

  const initialState = 0;

  const reducerFunction = (currentState, action) => {
    switch (action) {
      case "increment":
        return currentState + 1;

      case "decrement":
        return currentState - 1;

      case "multiply":
        return currentState * 2;

      case "divide":
        return currentState / 2;

      case "clear":
        return currentState - currentState;

      default:
        return currentState;
    }
  };

  const [currentCount, dispatch] = useReducer(reducerFunction, initialState);

  function Counter() {
    return (
      <div>
        <h1>{currentCount}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("multiply")}>Multiply by 2</button>
        <button onClick={() => dispatch("divide")}>Divide by 2</button>
        <button onClick={() => dispatch("clear")}>Clear</button>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* //code 1 */}
        {/* <button onClick={() => dispatch({type: "Increment"})}>Increment {state}</button> */}

        {/* //code 2 */}
        <Counter />
      </div>
    </>
  );
}

export default App;
