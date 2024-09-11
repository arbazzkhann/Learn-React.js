import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  const [todo, setTodo] = useState([
    {
      name: "Arbaz Khan",
      id: 2106700884
    },
    {
      name: "Ankit",
      id: 2106272665
    }
  ])

  const Todo = ({todo}) => {
    return (<>
      <div className="todo">{todo.name}</div>
      <div className="todo">{todo.id}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn && (
        <button>I will be shown only when second button is clicked</button>
      )}
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
            setShowBtn(!showBtn);
          }}
        >
          count is {count}
        </button>
      </div>

       <p>
          {todo.map(todo => {
            return <Todo todo={todo}/>
          })}
       </p>

    </>
    
  );
}

export default App;
