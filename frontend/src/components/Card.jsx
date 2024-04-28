import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className='mt-4 mb-4 hover:scale-105 duration-200 ml-4 '>
    <div className="card w-80 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className=" px-2 py-1 rounded-full  border-[2px]  hover:bg-pink-500 hover:text-white hover:cursor-pointer duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card