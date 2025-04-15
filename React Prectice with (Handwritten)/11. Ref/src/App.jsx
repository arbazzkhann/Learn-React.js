import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useRef } from 'react';

function App() {
    const inputRef = useRef(null); //step 1: create a ref
    const focusInput = () => {
        inputRef.current.focus(); //step 2: use it
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}> Focus input </button>
        </div>
    )
}

export default App
