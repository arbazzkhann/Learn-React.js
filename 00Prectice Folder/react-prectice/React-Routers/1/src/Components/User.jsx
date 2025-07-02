import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'


const User = () => {

    const myId = useParams()

  return (
    <div>
        <Navbar />
        <h1>{myId.userId}</h1>
    </div>
  )
}

export default User