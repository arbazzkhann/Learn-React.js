import { createRoot } from 'react-dom/client'

const h1 = <h1>Hello World form JS</h1>

const root = createRoot(document.querySelector('#root'));

root.render(h1)