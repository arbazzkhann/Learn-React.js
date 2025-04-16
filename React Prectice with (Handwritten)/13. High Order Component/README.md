# Higher Order Component

* A higher-order component (HOC) is **function** that **takes a component** and **return a new component** with **extra features**.
* Its like **wrapping a component** to **add some functionality**, **without the original one**.

## Simple definition:
* HOC = A function that takes a component -> return a new component.

## Basic syntax:
```js
function withExtraInfo(wrappedComponent) {
    return function EnhancedComponent(props) {
        return <wrappedComponent {...props} extraData="Extra Information.">
    };
}
```

## Using HOC:
```js
function Hello(props) {
    return <h1>Hello! {props.extarData}</h1>
}

const EnhancedHello = withExtraInfo(Hello);
```

-> Now <EnhancedHello /> shows **Hello! Extra Information.**

## Why use HOC?
* **Reuse logic** access components.
* **Add features** without **Repeating code**.
* **Keep code clean** and **Don't repeat your self**.

## Real-World use cases:
* Add **Authemntication** to Components.
* Add **Loading spinners**.
* **Logs Props** or **actions**.
* **Inject common data** into **multiple components**.

### Example (Adding loading behaviour):
```js
function withLoading(wrappedComponent) {
    return function EnhancedComponent({isLoading, ...rest})
    {
        if(isLoading) {
            return <p>Loading...</p>
        }
        return <wrappedComponent {...rest} />
    }
}

function DataDisplay({data}) {
    return <div>Data: {data}</div>
}

const DataWithLoading = withLoading(DataDisplay);
```

### Usage:
```js
<DataWithLoading isLoading={true} data="React" />
```