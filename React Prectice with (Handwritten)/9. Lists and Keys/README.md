# 📝 Lists and Keys in React

## 📋 What Are Lists?

In React, a **list** means displaying **multiple items** (like names, products, or messages) using the `.map()` function.

---

### 🔄 Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

function FruitsList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

✅ Output:  Apple

            Banana

            Mango