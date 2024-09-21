import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false)

  const saveToLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    //if todoString is not null
    if(todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

// handling show finished checkbox
  const toggleFinished = (e) => {
    setShowFinished(!showFinished)

    //saving to local storage
    saveToLocalStorage();
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)

    //deleting todo
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)

    //saving to local storage
    saveToLocalStorage();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });

    setTodos(newTodos);
    
    //saving to local storage
    saveToLocalStorage();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");

    //saving to local storage
    saveToLocalStorage();
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

      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">

      <h1 className="font-bold text-center text-2xl">iTasks - Manage your todos at one place</h1>

        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5 py-1 "/>
            <button onClick={handleAdd} disabled={todo.length < 3} className="disabled:bg-violet-200  text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 mx-4 px-5 rounded-full">Save</button>
          </div>
        </div>

        <input onChange={toggleFinished} type="checkbox" checked={showFinished}/> Show finished

        <h2 className="my-4 text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className="m-5">No todos to display</div>}
          {todos.map((item) => {
            return (showFinished || !item.isCompleted) && (

              <div key={item.todo} className="todo flex justify-between">
                <div className="flex gap-5">
                  <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} />
                  <div className={item.isCompleted? "line-through": ""}>{item.todo}</div>
                </div>

                <div className="button flex justify-center items-center h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className="text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-1"><FaEdit /></button>
                  <button onClick={(e) => {handleDelete(e, item.id)}} className="text-white bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 rounded-lg mx-1"><MdDelete /></button>
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
