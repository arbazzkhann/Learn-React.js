# Installation

* Paste this command in terminal:
```bash
npm i redux react-redux
```

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