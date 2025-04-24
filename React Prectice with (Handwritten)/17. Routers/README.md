# Routers

* **React routers** is a **Liabrary** that let you to create **multiple pages** (routers) in a single-page react app.
* It allows you to **navigate between different components without reloading the page**.

## Real-life example:
* **/** -> Home page
* **/about** -> About page
* **/contact** -> Contact page

## How to setup react routers?
1. Install React Router:
```js
npm install react-router-dom
```

2. Basic structure:
```js
import { BrowserRouter, Routers, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />}>
            </Routers>
        <BrowserRouter>
    );
}
```

## Navigate using **Link**:
```js
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
        </nav>
    );
}
```

## Dynamic Routers (with **Params**):

```js
<Route path="/user/:id" element={<userProfile />} />

```
* Inside router profile:
```js
import { useParams } from 'react-router-dom';
function userProfile() {
    const { id } = useParams();
    return <h2> User ID: {id} </h2>
}
```

## Navigate with **useNavigate**:
```js
import { useNavigate } from 'react-router-dom';
function ButtonComponent() {
    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate("/about")}>
            Go to about.
        </button>
    )
}
```

# Summary:
|   Feature              | Description                            |
|------------------------|----------------------------------------|
| BrowserRouter          | Wraps your app for routing             |
| Route                  | Defines a Route (Path + Component)     |
| Routes                 | Holds all your routers                 |
| Link                   | Used to Navigate (like **anchor tag**) |
| useParams              | Get URL Parameters                     |
| useNavigate            | Navigate Programmtically               |