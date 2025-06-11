// import React, { useState } from 'react';

// export default function ControlledCompo() {
//   const [name, setName] = useState('');

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Submitted Name: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


import { useRef, useState } from "react"
import React from "react"

export default function ControlledCompo() {
    const [name, setName] = useState("Arbaz Khan");
    const [age, setAge] = useState(22);

    const nameRef = useRef();
    const ageRef = useRef();

    function submitForm (e) {
        e.preventDefault();
        console.log(`You are: ${nameRef.current.value}`);
        console.log(`and your age is ${ageRef.current.value}`);
    }

    const changeName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }


    return (
        <>
            <div>
                {/* <form> */}
                <form onSubmit={submitForm}>
                    <input ref={nameRef} type="text" value={name} onChange={changeName}/>
                    <input ref={ageRef} type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}