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
      default:
        return currentState;
    }
  };

  function Counter() {
    const [count, dispatch] = useReducer(reducerFunction, initialState);

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
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
