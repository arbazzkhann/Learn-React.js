import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve() 
      }, d*1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/");
    let res = await r.text();
    console.log(data, res)
    // if(data.username == "aman") {
    //   setError("amanError", {message: "Sorry this user is blocked."});
    // }
    // if(data.password == data.username) {
    //   setError("chooseDifferentPassword", {message: "Username and password must be different."})
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register("username", {required: {value: true, message:"Username is required."}, minLength: {value: 3, message: "Minimum length is 3"}, maxLength: {value: 12, message: "Maximum length is 12"}})} placeholder='username'/>
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input type='password' {...register("password", {required: {value: true, message: "Password is required."}, minLength: {value: 3, message: "Minimum length is 6"}})} placeholder="password"/>
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.amanError && <div className='red'>{errors.amanError.message}</div>}
          {errors.chooseDifferentPassword && <div className='red'>{errors.chooseDifferentPassword.message}</div>}
        </form>
      </div>
    </> 
  )
}

export default App
