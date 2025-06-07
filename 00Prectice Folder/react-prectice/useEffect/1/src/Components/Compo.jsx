import React, { useState } from 'react'

import { useEffect } from 'react'

const Compo = () => {
    const [compoCount, setCompoCount] = useState(0);
    
    //With dependency array
    //Code will executes when dependency array element changes.
    // useEffect(() => {
    //     console.log("Hello world");
    // }, [compoCount]);

    //without dependency array:
    //code will executes when any state changes.
    // useEffect(() => {
    //     console.log("Hello world");
    // });

    //Empty dependency array:
    //Nothing changed when dependency array is empty.
    useEffect(() => {
        console.log("Hello world");
    }, []);



  return (
    <div>
        <h1>{compoCount}</h1>
        
        <button onClick={() => setCompoCount(compoCount+1)}>Compo Count Increase</button>
    </div>
  )
}

export default Compo