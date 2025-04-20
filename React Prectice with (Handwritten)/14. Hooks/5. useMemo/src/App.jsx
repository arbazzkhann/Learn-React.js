import { useState, useMemo } from "react";
import "./App.css";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMegical: i === 29_000_000,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const megical = useMemo(
    () => numbers.find((item) => item.isMegical === true),
    [numbers]
  ); //expensive computation

  return (
    <>
      <div>
        <h1>Megical number: {megical.index}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count == 10) {
              setNumbers(
                new Array(10_000_000).fill(0).map((_, i) => {
                  return {
                    index: i,
                    isMegical: i === 9_000_000,
                  };
                })
              );
            }
          }}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
