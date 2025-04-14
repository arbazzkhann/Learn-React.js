# 🧱 Component Composition in React

**Component Composition** means using **one component inside another**.  
It helps you build complex UIs by combining **smaller, reusable pieces**.

---

## 🎯 Why Use Composition?

- ✅ Break UI into **smaller, manageable parts**
- ✅ Keep code **clean, modular, and reusable**
- ✅ Makes apps **easy to maintain and scale**

---

## 💡 Example:

```js
function Header() {
  return <h1>My Website</h1>;
}
```

```js
function Content() {
    return <p>This is the content.</p>
}
```

```js
function App() {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}
```

-> **Combining smaller components** into a **big one**.