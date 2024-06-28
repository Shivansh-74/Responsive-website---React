import React from 'react'
import { ReactTyped } from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50px] h-[80vh]'>
      <div className='max-w-[1240px] mx-auto text-center my-[100px]'>
      <div className='md:text-3xl text-2xl font-bold '>learn with us</div>
      <h2 className='text-white font-bold md:text-[50px] text-[30px] mb-[4px]'>Grow with us</h2>
      <div className='text-[20px] md:text-[50px] md:p-[20] text-white font-bold '>
    Learn     <ReactTyped strings={["Java","Python","Php"]} typeSpeed={100} loop={true} backSpeed={90}/>

      </div>
      <button className='bg-black text-white p-3 rounded'>Get Started</button>
      </div>

    </div>
  )
}

export default Banner
