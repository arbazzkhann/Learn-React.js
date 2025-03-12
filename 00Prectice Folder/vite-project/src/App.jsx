import React, { useEffect, useState } from "react";

function App() {

  let [count, setCount] = useState(0);
  let [data, setData] = useState(0);

  useEffect(() => {
    console.log("Use Effect run", data);
  }, [data])



  return (
    <>
      <div>
        <h1>{count}</h1>
        <button className="bg-red-600" onClick={() => {count++, setCount(count)}}>Count</button>
        <h2>{data}</h2>
        <button className="bg-green-600" onClick={() => {data++, setData(data)}}>Data</button>
      </div>
    </>
  )
}

export default App;