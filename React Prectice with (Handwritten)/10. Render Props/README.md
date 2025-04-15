# Render Props

## What are render props?
* Render props is a **Pattern** in react where a **component shares code** with **another component** using a function as a prop.
* Instead of passing data, you **pass a function** that **return JSX**.

## Why use render props?
* To share logic between components.
* To reuse code (like hover, click, counter, etc).
* To make components more flexible.

### Example:
```js
function MouseTracker(prop) {
    const [X, setX] = React.useState(0);
    const [Y, setY] = React.useState(0);

    const handleMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div onMouseMove={handleMouseMove} style={{height: "100vh"}}>
            {props.render(X, Y)} {/*Render prop used here*/}
        </div>
    );
}
```

### How to use it:
```js
function App() {
    return (
        <MouseTracker
            render={(X, Y) => (
                <h1>Mouse Position: {X}, {Y}</h1>
            )}
        />
    );
}
```

## Break Down:
| Term         | Meaning                                |
| ------------ |:--------------------------------------:|
| Render prop  | A function passed as a prop            |
| Purpose      | To tell the component what to render   |
| Benefit      | Share logic, but customize             |
