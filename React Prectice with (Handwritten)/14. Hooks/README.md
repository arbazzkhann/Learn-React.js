# Hooks
* Hooks are **special functions** in react that let you use features like state, context, effect in functional components (without using classes).

## Why use hooks?
* Write **cleaner** and **shorter** code.
* No need to write class components.
* Easy to **reuse logic**.
* Helps to make your components more powerful.

## React hooks?
* **useState**: To **create** and **Manage state**.
* **useEffect**: To Run code on **mount**, **update**, or **unmount**.
* **useRef**: To **access DOM** or **Store values**.
* **useContext**: To **share data between components** easily.
* **useMemo**: To **optimize performance**, **avoid re-creating functions**.
* **useRender**: To **Manage complex state** logic (like redux).

### 1. useState
-> Store values like counter, input etc.

Syntax:
```js
const [count, setCounter] = useState(0);
```

### 2. useEffect
-> Run something after rendering.

Syntax:
```js
useEffect(() => {
    console.log("Component mounted or Updated.");
}, []);
```
* Empty array **[]** -> Run once (like componentDidMount).
* With Dependencies **[count]** -> Runs when **count** changes.

### 3. useRef
-> Access input box or store values without re-render.

Syntax:
```js
const inputRef = useRef();
<input ref={inputRef} />

//Store values
const countRef = useRef(0);
```

### 4. useContext
-> Pass data without props drilling.

Syntax:
```js
const ThemeContext = React.createContext();

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Child />
        </ThemeContext>
    )
}

function Child() {
    const theme = useContext(ThemeContext); //No prop needed
    return <div>{theme}</div>
}
```

### 5. useCallback
-> Stop function from being recreated on every render.

```js
const memoizedFn = useCallback(() => {
    console.log("Only re-created if[count] changes");
}, [count]);
```
-> use when **passing function** to **child component**.

