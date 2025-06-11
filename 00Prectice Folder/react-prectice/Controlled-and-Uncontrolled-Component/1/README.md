# Controled Components
In controlled components, form data is handled by React state. You use useState to store and update input values.

```js
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
```
