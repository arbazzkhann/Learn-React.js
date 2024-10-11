import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const { userId } = useParams()

  return (
    <div>
        <h1 className='gap-10 text-black'>I am { userId }</h1>
    </div>
  )
}

export default Users