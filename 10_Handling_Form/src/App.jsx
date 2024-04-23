import './App.css'
import { useForm } from "react-hook-form"


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  const delay = (delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, delay * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)  //simulating network delay
    console.log(data)
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {required: {value: true, message: "Username is required"}, minLength: {value: 3, message: "Username Minimum Length is 3"}, maxLength: {value: 8, message: "Maximum Length is 8"}, })} type="text"/> <br />
          {errors.username && <span className='red'>{errors.username.message}</span>} <br/>
          <input placeholder='password' {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value: 3, message: "Password Minimum Length is 3"}})} type="password" name="password"/> <br />
          {errors.password && <span className='red'>{errors.password.message}</span>} <br/>
          <input disabled={isSubmitting} type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
