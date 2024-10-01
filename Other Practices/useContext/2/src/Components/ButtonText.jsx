import React, { useContext } from 'react'
import myValueContext from '../Context/Context'

const ButtonText = () => {
    const {myValue} = useContext(myValueContext)

  return (
    <div>
        Value is: {myValue}
    </div>
  )
}

export default ButtonText