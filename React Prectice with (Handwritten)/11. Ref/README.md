# Ref
## What is Ref in react?
* Refs (Short for references) are used to directly access:
    * **DOM Elements** (like an input box).
    * OR a **React component instance**.
* You use them when you can't or don't want to do something with just state or props.

## Why use Ref?
* Access input values without using states.
* Focus on an input field automatically.
* Scroll to a section.
* Control animations or videos manually.

## How to create a Ref (Functional Component):
1. Import **useRef**
2. Create a ref using **useRef()**
3. Attach it to an element using **ref={myRef}**
4. Use **myRef.current** to access the element.

### Example - Focus an Input box:
```js
import React, { useRef } from 'react';

function InputFocus() {
    const inputRef = useRef(null); //step 1: create a ref
    const focusInput = () => {
        inputRef.current.focus(); //step 2: use it
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}> Focus input </button>
        </div>
    )
}
```