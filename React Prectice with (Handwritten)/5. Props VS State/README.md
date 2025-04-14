# 🔄 Props vs State in React

Understanding the difference between **Props** and **State** is key in React development.

---

## 📬 Props

- 📤 Data **passed to a component** from a parent.
- 🚫 **Read-only** – cannot be modified by the component receiving it.
- 📦 Used for **sending data** and making components dynamic.

---

## 📦 State

- 🗃️ Data **stored within a component**.
- ✅ Can be **changed/updated** using `useState()` (in functional components).
- 🔄 Used for **managing dynamic data** within a component.

---

## 💡 Example: Passing Props

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Usage:
<Welcome name="Arbaz" />
