import React from 'react'

import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <h1>I am About.</h1>
        <img className='h-100' src='/Images/venom.jpg' alt="image not found" />
    </div>
  )
}

export default About