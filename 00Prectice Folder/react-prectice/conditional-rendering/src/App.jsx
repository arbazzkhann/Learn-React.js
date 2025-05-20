import { useState } from "react";

const App = () => {
  const [lists, setLists] = useState([
    { name: "Arbaz", age: 22 },
    { name: "Farhan", age: 9 },
    { name: "Shubham", age: 19 }
  ]);

  function addItem() {
    setLists([...lists, { name: "Farhan Pagal", age: 47 }]);
  }

  return (
    <div>
      {/* Fixed button at top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#fff",
          zIndex: 1000,
          padding: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <button onClick={addItem}>Click me!</button>
      </div>

      {/* Content below with padding to avoid overlap */}
      <div style={{ marginTop: "60px" }}>
        {lists.map((item, index) => (
          <div>
            {console.log(index)}
            <div key={index}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
