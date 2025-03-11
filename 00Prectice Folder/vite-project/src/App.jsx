import React from "react";

function App() {

  let count = 0;

  function increaseCount() {

      
  }
  function decreaseCount() {
    if(count > 0) {
      count--;
      document.querySelector(".myH2").innerText = count;
    }

  }

  return (
    <>
      <div>
          
          <h2 className="myH2 text-4xl font-bold dark:text-white">0</h2>
          <button onClick={() => {
                if(count >= 0 && count < 10) {
                  count++;
                  document.querySelector(".myH2").innerText = count;
                }}} 
                type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increase count</button>
          <button onClick={decreaseCount} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrease count</button>
      </div>
    </>
  )
}

export default App;