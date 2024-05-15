import './App.css'
import { useForm } from "react-hook-form"


function App() {

  const {
    register,
    handleSubmit,
    setError,
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
    if(data.username !== "shubham") {
      setError("myform", {message: "Your form is not in good order beacuse credentials are invalid"});
    }
    if(data.username == "rohan") {
      setError("blocked", {message: "User is Blocked"});
    }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div><input placeholder='username' {...register("username", {required: {value: true, message: "Username is required"}, minLength: {value: 3, message: "Username Minimum Length is 3"}, maxLength: {value: 8, message: "Username Maximum Length is 8"}, })} type="text"/></div>
          <div>{errors.username && <span className='red'>{errors.username.message}</span>} </div>
          <div><input placeholder='password' {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value: 3, message: "Password Minimum Length is 3"}, maxLength: {value: 8, message: "Password Maximum length is 8"}})} type="password" name="password"/></div>
          <div>{errors.password && <span className='red'>{errors.password.message}</span>}</div>
          <div><input disabled={isSubmitting} type="submit" value="submit" /></div>
          <div>{errors.myform && <span className='red'>{errors.myform.message}</span>}</div>
          <div>{errors.blocked && <span className='red'>{errors.blocked.message}</span>}</div>
        </form>
      </div>
    </>
  )
}

export default App
