import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:text-white dark:bg-slate-900">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className='font-bold text-lg'>Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input {...register("email", { required: true })} type='email' placeholder='Enter your email' className='w-80 outline-none border dark:bg-transparent px-3 py-1 rounded-md'/>
        <br/> {errors.email && <span className='text-red-500 text-sm mt-1'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input {...register("password", { required: true })} type='text' placeholder='Enter your password' className='w-80 dark:bg-transparent outline-none border px-3 py-1 rounded-md'/>
       <br/> {errors.password && <span className='text-red-500 text-sm mt-1'>This field is required</span>}
    </div>
    
    <div className='flex justify-around mt-2 items-center'>
        <button type='submit' className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Login</button>
        <p>Not resisterd?<Link to="/signup" className='underline text-blue-500 hover:text-blue-700 cursor-pointer'>Signup</Link></p>
    </div>

  </form>
  </div>
</dialog>
    </>
  )
}

export default Login