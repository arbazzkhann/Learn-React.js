# Events

## What are events in react?
* **Events are actions that** happens when **user interacts with app**.

### Example: 
* Clicking a button,
* Typing in a box,
* Moving the mouse, etc.

## Common events in react:
|       Event Type          |       React Event         |       What it does                |
|---------------------------|---------------------------|-----------------------------------|
|**Click**                  |       onClick             | When user click something.        |
|**Input Change**           |       onChange            | When user types or changes input. |
|**Form Submit**            |       onSubmit            | When a form is submitted.         |
|**Mouse Enter**            |       onMouseEnter        | Mouse hovers over something.      |
|**Key press**              |       onKeyDown           | When user press a key.            |

## How to use Events?

### Example (onClick):
```js
function myButton() {
    const handleClick = () => {
        alert("You clicked the button!");
    }
    
    return <button onClick={handleClick}> Click me! </button>
}
```

### Example (onChange):
```js
function InputBox() {
    const handleChange = (e) => {
        console.log("You typed: " + e.target.value);
    }

    return <input type="text" onChange={handleChange} />
}
```

* **e** is the event object - it contains info about the event (like the value typed).

## Form example (onSubmit):

```js
function MyForm() {
    const handleSubmit = (e) => {
        e.preventDefault(); //stop page from reload
    }
};

return (
    <form onSubmit={handleSubmit}>
        <input type="text">
        <input type="submit"> Submit </button>
    </form>
)
```