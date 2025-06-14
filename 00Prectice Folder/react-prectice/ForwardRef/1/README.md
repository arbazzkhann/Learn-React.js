# forwardRef
**forwardRef is a function** that lets you **pass a ref from a parent component to a child functional component**.


## Without forwardRef:
### Example:
```js
function MyInput() {
  return <input />;
}

const ref = React.createRef();
<MyInput ref={ref} />  // ❌ Error: ref doesn't reach the input
```

## With forwardRef:

### Child Component:
```js
import React, { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default MyInput;
```

### Parent Component:
```js
import React, { useRef } from 'react';
import MyInput from './MyInput';

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 🧠 Summary:
* forwardRef is used to forward a ref from **parent to child**.
* It’s especially useful when a parent needs to directly access a DOM node (like <input>) inside a child component.
* Used with functional components that don’t automatically handle refs like class components do.
