import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {required: true, minLength: 3, maxLength: 8, })} type="text"/> <br />
          {errors.username && <span>This field is required</span>} <br/>
          <input placeholder='password' {...register("password")} type="password" name="password"/> <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
