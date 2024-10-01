import React, {useContext} from 'react'
import ButtonText from './ButtonText'
import myValueContext from '../Context/Context'


const Button = () => {
    const {myValue, setMyValue} = useContext(myValueContext)

  return (
    <div>
        <button onClick={() => {setMyValue(myValue + 1)}} type="button" class="m-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><ButtonText /></button>
    </div>
  )
}

export default Button