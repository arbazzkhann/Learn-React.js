import { useState } from 'react'
import './App.css'
import AppleImg from './Components/Images/Apple.jpg'
// import FirstCard from './Components/Cards/FirstCard'

function App() {

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  function increaseCount1() {
    count1++;
    setCount1(count1);
  }
  function increaseCount2() {
    count2++;
    setCount2(count2);
  }


  return (
    <>
      <div>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img onClick={increaseCount1} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={AppleImg} alt="No Image Found!" />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HELLO THIS IS TITLE {count1}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hello this is Subtitle {count1}</p>
        </div>
        </a>
      </div>
      <div>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img onClick={increaseCount2} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={AppleImg} alt="No Image Found!" />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HELLO THIS IS TITLE {count2}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hello this is Subtitle {count2}</p>
        </div>
        </a>
      </div>
    </>
  )
}

export default App
