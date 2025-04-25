# State Management in React

## What is state management?
* In react, state is used to store and manage data in a component.
* Think of state like a component's memory -> it changes based on user actions and events.

## Problems in Big APPS
* When many components need to share or access the same data, passing state manually via props becomes messy this is called **Props Drilling**.

## Solution: **Context API**
* The Context API us a built-in way in react to share data globally (to any component) without passing props manually.

## Use Context When?
* When you have global data like:
    * Theme (light / dark)
    * Logged-in user info
    * Language
    * Cart data in E-Commerce App

* When you want to avoid props drilling.

## How to use Context API:
1. Create Context:
```js
import { createContext } from 'react';

const ThemeContext = createContext();
```
2. Wrap your App with **Provider**:
```js
<ThemeContext.Provider value={"dark"}>
    <App />
</ThemeContext.Provider>
```

3. Use Context in any Component:
```js
import { useContext } from 'react';

function MyComponent() {
    const theme = useContext(ThemeContext);
    return <div>Theme is: {theme}</div>
}
```

* Now **theme** can be used anywhere without passing it through props.


# **TIP**:
-> For larger apps, you can also used tool like:
* Redux
* Zustand
* Recoil
* Jotai
* MobX

-> But for most apps, **context API + useReducer** works great.
