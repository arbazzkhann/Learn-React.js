import { useState } from "react"

export default function App() {

  const [color, setColor] = useState("olive");

  return (
      <div className="w-full h-screen duration-300"
      style={{backgroundColor: color}}>

          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}>Red</button>
                <button onClick={()=> setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
                <button onClick={()=> setColor("#ff4d00")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#ff4d00"}}>Orange</button>
                <button onClick={()=> setColor("Gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Gray"}}>Gray</button>
                <button onClick={()=> setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
                <button onClick={()=> setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
                <button onClick={()=> setColor("#f700a4")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#f700a4"}}>Pink</button>
                <button onClick={()=> setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
              </div>
          </div>


        </div>
  )
}