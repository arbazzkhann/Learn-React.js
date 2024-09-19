import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  };

  const handleDelete = (e, id) => {
    console.log(`The id is : ${id}`)
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  
  const handleCheckbox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  };
  

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-6"
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.map((item) => {
            return (
              <div
                key={item.todo}
                className="todo flex w-2/3 my-3 justify-between"
              >
                <input name={item.id} type="checkbox" onChange={handleCheckbox} value={item.isCompleted} id="" />
                <div className={item.isCompleted? "line-through": ""}>{item.todo}</div>
                <div className="button">
                  <button
                    onClick={handleEdit}
                    className="text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e)=> {handleDelete(e, item.id)}}
                    className="text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
