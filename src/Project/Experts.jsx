import React from 'react'

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2  mx-auto w-[100%] my-10  md:grid grid-cols-2'>
      <div className=' h-[200px] md:mb-[10px] col-span-1 w-[80%] flex  justify-center'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBDUKmgG3cYjkC9kEoRWuN_vigo5uT0Kx1g&s" alt="" />
      </div>
      <div className=' h-[200px] md:my-[20px] col-span-1 flex flex-col justify-center'>
      <h1 className='text-black font-bold m-2 md:m-[20px]'>Learn from experts</h1>
      <p className='my-2'>
      It is just a demo website for practicing Tailwind css in react , It is a responsive website
      </p> <button className='bg-black text-white p-3 rounded w-[40%]'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
