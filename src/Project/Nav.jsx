import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] py-[17] flex justify-between items-center mx-auto '>
      <div className='text-3xl font-bold'>
      Try
      </div>
      {
        !toggle? <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>:     <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>


      }
      <ul className='hidden  md:flex text-white gap-10 '>
      <li className='cursor-pointer text-2xl font-bold hover:scale-[1.1] duration-300'>Home</li>
      <li className='cursor-pointer text-2xl font-bold hover:scale-[1.1] duration-300'>Company</li>
      <li className='cursor-pointer text-2xl font-bold hover:scale-[1.1] duration-300'>Resources</li>
      <li className='cursor-pointer text-2xl font-bold hover:scale-[1.1] duration-300'>About</li>
      <li className='cursor-pointer text-2xl font-bold hover:scale-[1.1] duration-300'>Contact</li>
      </ul>
      
      <ul className={`duration-500 md:hidden w-full flex-col h-screen text-white fixed bg-black  top-[80px] 
      ${!toggle? 'left-[100%]':'left-[0]'}`}>
      <li className='p-3'>home</li>
      <li className='p-3'>company</li>
      <li className='p-3'>resources</li>
      <li className='p-3'>about</li>
      <li className='p-3'>contact</li>
      </ul>
      
      </div>
    </div>
  )
}

export default Nav