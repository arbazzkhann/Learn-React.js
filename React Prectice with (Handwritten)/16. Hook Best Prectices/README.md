# React Hooks best prectices:

## 1. Always use hooks at the top level:
* **Don't** use hooks inside loops, coinditions or nested function.
* Only use them at the top of your component or custom hooks.

## 2. Use **useState** for simple data:
* Great for counters, input fields, toggles.
* Keep state small and meaningful.

## 3. Use useEffect for side effects:
* Perfect for:
    * APIs
    * Event Listeners
    * Timers.

* Always add dependencies in the **[]**.

## 4. **Break logic** into custom hooks:
* Avoid too much logic in one components.
* Reuse with custom hooks.

## 5. Use **useCallback** and **useMemo** wisely:
* Don't overuse them - Only when you face performace issue.
* use **useCallback** to **memoize functions**.
* use **useMemo** to **cache expensive calculations**.

## 6. Keep components clean and readable:
* Separate UI from logic.
* Move logic into custom hooks.
* Use short, meaningful names for hooks.

## 7. Use **useRef** for **DOM Access** and **Persisting values**:
* Focusing inputs.
* Storing values without re-render.
* Timer references.

## 8. Group related state together:
```js
const [form, setForm] = useState({name: "", email: ""});
```

* instead of managing Name and email separately - group them if they belog together.

## 9. Cleanup Side effects:
* Always cleanup in **useEffect** when using:
    * Timer
    * Event listeners
    * Subscriptions.

```js
useEffect(() => {
    const timer = setTimeout(() => {
        //code
    }, 1000);

    return () => clearTimeout(timer); //cleanup
}, []);
```