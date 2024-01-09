import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Custom Reactttt!</h1>
  )
}


const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_black'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)
