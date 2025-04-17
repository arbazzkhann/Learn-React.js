import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //creating HOC
  function withExtraInfo(WrappedComponent) {
    return function EnhancedComponent(props) {
      return <WrappedComponent {...props} extraData="Extra Infomation" />
    }
  }

  //Using HOC
  function Hello(props) {
    return <h1>Hello! {props.extraData}</h1>
  }
  const EnhancedHello = withExtraInfo(Hello);

  return (
    <>
      <div>
        <EnhancedHello/>
      </div>
    </>
  )
}

export default App
