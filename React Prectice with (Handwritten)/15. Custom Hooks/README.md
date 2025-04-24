# Custom Hooks

* A custom hook is a **javascript function** that starts with **use** and let you **reuse react logic** (like state, effects, etc) across components.

* It helps you to write cleaner and reusable code.

## Why create custom hooks?

* Reuse code logic.
* Keep components clean.
* Share stateful behaviour.
* Better project structure.

## How to **create** custom hooks?
* Steps:
    1. Name it starting with **use** (eg., useCounter, useMyHook, etc).
    2. Use other hooks inside custom hooks (like useState, useEffect, etc).
    3. Return what you need (data / functions).

### Example: useCounter custom hook:
```js
import { useState } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}
```

### Using the custom hook:
```js
function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(5);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={reset}> Reset </button>
        </div>
    );
}
```