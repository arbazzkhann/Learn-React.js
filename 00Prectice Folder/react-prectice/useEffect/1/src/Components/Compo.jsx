import React, { useState } from 'react'

import { useEffect } from 'react'

const Compo = () => {
    const [compoCount, setCompoCount] = useState(0);
    
    //With dependency array
    // useEffect(() => {
    //     console.log("Hello world");
    // }, [compoCount]);

    //Empty dependency array
    useEffect(() => {
        console.log("Hello world");
    })

  return (
    <div>
        <h1>{compoCount}</h1>
        
        <button onClick={() => setCompoCount(compoCount+1)}>Compo Count Increase</button>
    </div>
  )
}

export default Compo