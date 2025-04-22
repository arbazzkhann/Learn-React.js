import React, { useState, useCallback } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  ////without useCallback
  // const getAdjective = () => {
  //   return "another" + count;
  // };

  //with useCallback
  const getAdjective = useCallback(() => {
    return "another" + count;
  }, [/*count*/]);

  return (
    <div>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
