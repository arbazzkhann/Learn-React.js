import "./App.css";

function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <>
      <div>
        {fruits.map((fruit) => {
            return (
              <ul key={fruit}>
                <li >{fruit}</li>
              </ul>
            )
        })}
      </div>
    </>
  );
}

export default App;