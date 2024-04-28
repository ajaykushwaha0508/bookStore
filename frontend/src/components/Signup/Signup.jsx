import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className='h-screen flex justify-center items-center'>
  <div className="modal-box  border p-3 rounded-md shadow-xl dark:text-white dark:bg-slate-900">
    <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className='font-bold text-lg'>Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input {...register("name", { required: true })} type='text' placeholder='Enter your full name' className='w-80 outline-none border dark:bg-transparent px-3 py-1 rounded-md'/>
        <br/> {errors.name && <span className='text-red-500 text-sm mt-1'>This field is required</span>}
    </div>
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
        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Signup</button>
        <p>Not resisterd?<span onClick={()=> document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 hover:text-blue-700 cursor-pointer'>Login</span></p>
    </div>
    </form>
    <Login/>
  </div>
</div>
    </>
  )
}

export default Signup