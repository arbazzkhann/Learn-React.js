import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //random password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";  //random string

    if (numberAllowed == true) {   //if number check-box check 
      str += "0123456789";
    }

    if (charAllowed == true) {   //if charactor check-box check 
      str += "@#$%^~!&*";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);  //random number generate

      pass += str.charAt(char);     //inserting charactors into pass variable
    }

    setPassword(pass);  //useState hook  //passing 'pass' string into setPassword


  }, [length, numberAllowed, charAllowed]);


  // useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  // useRef Hook
  const passwordRef = useRef(null);


  // copy password to clip-board method
  const copyPasswordToClipBoard = useCallback(() => {
      passwordRef.current?.select()   //selecting string
      window.navigator.clipboard.writeText(password);  //copy to clip-board
  }, [password]);


  // return HTML
  return (
    <div className="h-36 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
        />

        {/* copy button */}
        <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>  
      </div>

    {/* bottom div */}
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>

        {/* number check-box */}
        <div className="flex items-ceter gap-x-1">
            <input 
              type="checkbox"
              defaultCheck={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
        </div>

        {/* charactors check-box */}
        <div className="flex items-ceter gap-x-1">
            <input 
              type="checkbox"
              defaultCheck={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Charactors</label>
        </div>
      </div>

    </div>
  );
}
