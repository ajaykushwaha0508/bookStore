import React from 'react'
import booklist from "../../public/booklist.json"
import Card from './Card';
import { Link } from 'react-router-dom';
const Course = () => {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>we're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
        <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis dolorem dolor nostrum eos reprehenderit quae id minima natus earum, quidem hic accusantium velit ad fugit distinctio aspernatur. Tempora odit, expedita nostrum dolorum consequuntur blanditiis! Sed eius deleniti maiores at labore dolore repellat velit commodi, quis cupiditate saepe mollitia debitis.</p>
      <Link to="/">
        <button className='duration-200 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6'>Back</button>
      </Link>
      
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                booklist.map((item)=> <Card item={item}/>)
            }
        </div>

   </div>
   </>
  )
}

export default Course;