# 🛠️ Installation

Paste this command in your terminal:

```bash
npm i redux react-redux
```

---

# 📦 Redux Components

## 🔁 Actions
- Actions are **JavaScript objects** that contain some information.
- In Redux, actions are the **only way to send data to the store**.
- Every action must have a **`type`** property defined as a **string**.
- The `type` property is **mandatory** in every action object.

### 🧾 Syntax:
```js
const action = {
  type: 'ACTION_TYPE'
};
```

## 🔄 Reducers
- Reducers are **functions** that **update the state** based on the action sent to the store.
- They take the **current state** and an **action**, and return a **new state**.
- Used to update the application state in a **pure** and **predictable** way.

### 🧠 Concept:
```js
(previousState, action) => newState
```

## 🏬 Store
- The entire application contains a **single store**.
- It is responsible for **holding the application's state**.
- Methods provided by the store:
  - `getState()` — Access the current state.
  - `dispatch(action)` — Dispatch an action to update the state.
  - `subscribe(listener)` — Register a function that runs every time the state changes.

---

# 🧩 Redux Hooks

React Redux offers a set of hooks to **interact with the Redux store** in functional components.

## 📌 useSelector Hook
- `useSelector` allows you to **read data from the Redux store**.
- It accepts a **selector function** that receives the state and returns the needed data.

### ✍️ Syntax:
```js
const someData = useSelector(state => state.someData);
```

## 🚀 useDispatch Hook
- `useDispatch` returns a reference to the store’s **dispatch** function.
- Useful for **sending actions** to the store.

### ✍️ Syntax:
```js
const dispatch = useDispatch();
```
