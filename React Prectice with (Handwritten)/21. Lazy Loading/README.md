# Lazy Loading

* Lazy loading in **React JS** helps to **optimize the performance** of React applications.
* Lazy loading is **technique in React** that allows you to **load components**, **modules**, or **assets asynchronously**, **improving the loading time** of react applications.
* React provides a **built-in React.lazy() method** and **Suspense component** to achieve lazy loading.

## Steps to implement Lazy Loading:

* Recognize the component you want to Lazy Load. These are mostly Large or Complex data which is not necessory for all the users when the page loads.
* Import the **lazy()** and **Suspense component** from **React**.
* Use the **lazy() function** to **dynamically import the component** you want to lazy load.
Note: The arguments to the **lazy()** function should be a function that return the result of the **import() function**.
* Wrap the lazy-load component in a **Suspense** component, which will **display a fallback UI**, **while the component is being loaded**.