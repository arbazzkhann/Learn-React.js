import React from 'react'

import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1>I am Home.</h1>
        <img className='h-100' src='/Images/mac.jpg' alt="image not found" />
    </div>
  )
}

export default Home