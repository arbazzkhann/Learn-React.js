import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("form submitting", data);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name: </label>
          <input
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "Minimum length atleast 3" },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}

          <label>Last Name: </label>
          <input {...register("lastName")} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
