import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px]'>
    <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3'>
    <div className="shadow-xl  h-[450px]  rounded-[10px]  bg-slate-50 hover:bg-[white] my-[5px]  hover:text-black hover:scale-105 duration-500 gap-[20px] flex flex-col justify-center items-center mx-[40px]">
    <h1 className='text-3xl text-black font-bold my-[20px] w-[100%] text-center'>Frontend Development</h1>
    <h1 className='text-3xl text-black font-bold my-[20px]'>15000rs</h1>
    <p className='my-[20px] w-[85%] text-center'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi dolores eaque
    </p>
    <button className='bg-[black] text-white p-3 rounded my-[20px]  hover:text-black  hover:bg-white hover:border duration-300'>Get Started</button>
    </div>
    <div className="shadow-xl  h-[450px] rounded-[10px] my-[5px] hover:scale-105 duration-500 bg-slate-50 hover:bg-white  hover:text-black flex flex-col justify-center items-center mx-[40px]">
    <h1 className='text-3xl text-black font-bold my-[20px]  text-center'>Backend Develeopment</h1>
    <h1 className='text-4xl text-black font-bold my-[20px]'>25000rs</h1>
    <p className='my-[20px] w-[85%] text-center'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi dolores eaque
    </p>
    <button className='bg-[black] text-white p-3 rounded my-[20px]  hover:text-black  hover:bg-white hover:border duration-300'>Get Started</button>
    </div>
    <div className="shadow-xl  h-[450px] rounded-[10px]  my-[5px] hover:scale-105  bg-slate-50 hover:bg-white  duration-500 flex flex-col justify-center items-center mx-[40px]">
    <h1 className='text-3xl text-black font-bold my-[20px]  text-center'>Full Stack Development</h1>
    <h1 className='text-4xl text-black font-bold my-[20px]'>40000rs</h1>
    <p className='my-[20px] w-[85%] text-center'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi dolores eaque
    </p>
    <button className='bg-[black] text-white p-3 rounded my-[20px] hover:bg-[white] hover:text-black hover:border duration-300'>Get Started</button>
    </div>
    </div>
      
    </div>
  )
}

export default Plans
