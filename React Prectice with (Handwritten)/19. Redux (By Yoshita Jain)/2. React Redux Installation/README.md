# Installation

* Paste this command in terminal:
```bash
npm i redux react-redux
```


# Redux components

## Actions
* Actions are **JavaScript object** that contains some information.
* Actions in Redux are the **only way to send data to the store**.
* Actions have a **type** property and it should be defined in **string**.
* It is compulsory to include the **type property** in the object.

### Syntax:
```js
const Actions = {
    type: ''
}
```

## Reducers
* Reducers are **functions** that **update the state** based on the action sent to the store.
* Reducers are functions that **take the current state** and **an action**, **return the new state**, and **send it to the store** to **update the application**.
* **(previous_state, action) => new_State**.

## Store
* Entire Application contains **single store**.
* It is responsible for **holding application states**.
* **getState ()** method gives access to state it holds.
* **dispatch (action)** method allows state to be updated.
* It has subscribe (listener) method as well by which we can register listeners.
* This Method accepts the function (listener) as parameter which execute anytime when the state in redux store changes.


# Redux Hooks
React Redux offers set of hooks to - **subscribe to redux store** and **dispatch actions**.

## useSelector Hook
* useSelector is a hook react-redux library provides to get **hold of any state** that is maintained in the redux store.
* Syntax:
```js
const xyz = useSelector(selector: function, equalityFn?: function)
```
* **Selector function** accepts the **redux state** as its **arguments** and **return a value**.

## useDispatch Hook
* This hook **returns a reference** to the **dispatch function** from the **redux store**.
* Syntax:
```js
const dispatch = useDispatch();
```