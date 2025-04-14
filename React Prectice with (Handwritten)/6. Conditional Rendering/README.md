# 🔀 Conditional Rendering in React

Conditional rendering means showing **different content** based on certain conditions — like if a user is logged in or not.

---

## 📌 How it Works

🔹 You can use **JavaScript conditions** (like `if`, `ternary`, `&&`) directly inside JSX using `{}`.  
🔹 This lets you control **what gets displayed** on the screen.

---

## 💡 Example:

```js
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>}
  </div>
);
