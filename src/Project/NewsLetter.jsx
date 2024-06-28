import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] md:flex justify-between py-[20px]'>
    <div className=" ">
    <h1 className='md:text-[40px] text-[20px] font-bold text-white'>Want to learn I.T skills?</h1>
    <span className='text-white'>Lorem, ipsum dolor sit amet !</span>
    </div>
    <div className="my-[20px] md:my-[4px]">
    <input type="text" className='p-3 mx-2 text-slate-600' placeholder="email"/>
    <button className='bg-black text-white p-3   rounded' >Get Started</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non!</p>
    
    </div>
    </div>
    </div>
  )
}

export default NewsLetter
