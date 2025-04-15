# 🔁 Component Life Cycle in React

The **Component Life Cycle** is the journey of a React component from **creation**, through **updates**, to **removal**.

> Born → Grow → Dies

---

## 📖 Life Cycle Phases

React components go through **three main phases**:

1. **Mounting** – Component is created and added to the DOM.
2. **Updating** – Component updates when props or state changes.
3. **Unmounting** – Component is removed from the DOM.

---

## 🧠 Life Cycle Methods (Class Components):

| Method                  | When It Runs                             |
|------------------------|------------------------------------------|
| `constructor()`        | When the component is created            |
| `componentDidMount()`  | After component is mounted to the DOM    |
| `componentDidUpdate()` | After props/state updates                |
| `componentWillUnmount()` | Before the component is removed        |

### 💡 Example – Class Component

```js
class MyComponent extends React.Component {
  constructor() {
    super();
    console.log("1. Constructor called.");
  }

  componentDidMount() {
    console.log("2. Component did mount.");
  }

  componentDidUpdate() {
    console.log("3. Component did update.");
  }

  componentWillUnmount() {
    console.log("4. Component will unmount.");
  }

  render() {
    return <h1>Hello Lifecycle</h1>;
  }
}
```

## 🧠 With Functional Component (Using Hooks):

| Lifecycle Phase                  | Hook used          |
|------------------------|------------------------------------------|
| `Mounting`        | useEffect(() => {}, [])           |
| `Updating`        | useEfftect(() => {}, [state])     |
| `Unmounting`      | return() => {} inside useEffect.  |


### 💡 Example:
```js
import { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        };
    }, []);
    return <h1>Hello</h1>
}
```