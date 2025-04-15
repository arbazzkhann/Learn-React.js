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


## What are keys in react?
-> Keys are special IDs that help react to **identify** each item in a list.

### Example (Without keys):

```js
{fruits.map((fruit) => {
    <li>{fruit}</li>  //key used
})}
```

### Example (With keys):

```js
{fruits.map((fruit, index) => {
    <li key={index}> {fruit} </li>  //key added
})}
```
-> Its always better to use a **Unique ID** if possible, instead of index.

## Why keys are important?
* Helps react to update only **what changed**.
* Makes app **Faster** and **Efficient**.
* **Avoid Bugs** or **wrong updates**.