import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register("username", {required: {value: true, message:"Username is required."}, minLength: {value: 3, message: "Minimum length is 3"}, maxLength: {value: 12, message: "Maximum length is 12"}})} placeholder='username'/>
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input type='password' {...register("password")} placeholder="password"/>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
