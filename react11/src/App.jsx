import "./App.css"
import { useForm } from "react-hook-form"
function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm()
  
  async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("submitting the form",data);
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)} >
    <div>
     <label>First Name</label>
  <input className={errors.firstname? "input-error":""}
    {...register('firstName', {
      required: "First name is required",
      minLength: { value: 3, message: "Minimum length is 3" },
      maxLength: { value: 6, message: "Maximum length is 6" },
    })}
  />
  {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
    </div>
    <br />
     <div>
      <label >Middle Name</label>
      <input {...register('middleName',{
      required: "Middle name is required",
      minLength: { value: 3, message: "Minimum length is 3" },
      maxLength: { value: 6, message: "Maximum length is 6" },
    })}/>
    </div>
    <br />
     <div>
      <label >last Name</label>
      <input {...register('LastName')}/>
    </div>
    <br />
    <input type="submit" disabled={isSubmitting} value={isSubmitting?"submitting":"submit"}
     />
    </form>
  )
}

export default App
