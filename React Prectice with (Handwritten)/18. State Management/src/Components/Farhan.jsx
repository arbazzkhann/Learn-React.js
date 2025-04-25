import React from 'react'
import { useContext } from 'react'
import myCountContext from './Context'

const Farhan = () => {
  const {count} = useContext(myCountContext)
  return (
    <div>
        <h1>Hello my name is Farhan {count}</h1>
    </div>
  )
}

export default Farhan