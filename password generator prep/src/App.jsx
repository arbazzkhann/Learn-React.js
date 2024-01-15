import { useState, useEffect, useRef, useCallback } from "react"

export default function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


 function passwordGenerator() {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) {
    str += "0123456789";
  }

  if (charAllowed) {
    str += "@!#~$%^&*+=.";
  }

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);
}


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()   //selecting string
    window.navigator.clipboard.writeText(password);  //copy to clip-board
}, [password]);
  

  return (
      <div className="">
          <div>
            <input 
                style={{backgroundColor: "white", color: "orange"}}
                type="text" 
                value={password}
                placeholder="Password"
                ref={passwordRef}
            />

            <button onClick={copyPasswordToClipBoard} className="bg-blue-600">Copy</button>
          </div>


          <div>
            <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
            />

            <label>Length: {length}</label>  <br />

            <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
            />
            <label>Number Allowed</label>  <br />

            <input 
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
            />
            <label>Charactor Allowed</label>  <br />
          </div>

      </div>
  )
}