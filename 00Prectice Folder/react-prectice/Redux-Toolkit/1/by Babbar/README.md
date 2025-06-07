# Redux Toolkit

It is a **state management liabrary** can be used with **React JS**, **Viu JS**, **Angular JS**.

### Terms for Redux toolkit:
1. Action:
* An action is a plain **JavaScript object** that **describes what happened**.
* Has a **type** field and **optional payload**.
* In Redux Toolkit, actions are **automatically created with slices**.

2. Reducers: 
* Reducers are **functions** that tell how the **state should change based on an action**.
* In Redux Toolkit, reducers are **written inside slices** using **createSlice()**.

3. Slice:
* A slice is a **collection of state**, **reducers**, and **actions** for a specific part of the app.
* Created using **createSlice()**.
* Automatically **generates action** creators and reducer functions.

4. Store: 
* The **store holds the entire app state**.
* Created using **configureStore()** in Redux Toolkit (easier than createStore() from classic Redux).
* **Connects all slices together**.

5. State:
* State is the **data** or **information** managed by Redux.
* **Each slice manages its own piece of state**, and the **store combines them into one global state**.