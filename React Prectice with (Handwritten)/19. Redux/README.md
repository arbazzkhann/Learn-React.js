# Redux
* Redux is a **state management library** for JavaScript apps (especially React).
* It helps you **manage** and **share state** (data) across multiple components.

## 🤔 Why Redux?
1. **Centralized state** – All your app's data (state) is stored in one place (called the store).

2. **Easy data flow** – Components can read and update data easily using actions and reducers.

3. **Predictable** – The flow of data is always the same:
*Action → Reducer → New State*

## 🔁 Redux Flow (in simple terms):
```scss
UI → dispatch(action) → reducer → update store → UI re-renders
```

| Term            | Meaning                                                       |
| --------------- | ------------------------------------------------------------- |
| **Store**       | Holds the entire state/data of your app                       |
| **Action**      | An object that describes *what happened* (example: INCREMENT) |
| **Reducer**     | A function that decides *how state should change*             |
| **Dispatch**    | Sends the action to the reducer                               |
| **useSelector** | React hook to get state from the Redux store                  |
| **useDispatch** | React hook to send actions (like a button click) to the store |

## 🛠 Example (Counter App):
1. Action:
```js
const increment = { type: 'INCREMENT' };
```

2. Reducer:
```js
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

3. Store:
```js
import { createStore } from 'redux';
const store = createStore(counterReducer);
```

4. Dispatch and Get State:
```js
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
```

## Redux VS Context API:
| Redux               | Context API         |
| ------------------- | ------------------- |
| Good for large apps | Good for small apps |
| More setup          | Easy setup          |
| Dev tools support   | No built-in tools   |


## ✅ Conclusion:
* Redux is like a big manager that helps you control your app's data from one place.
* When your app grows big and has many components sharing the same data, Redux is very useful.