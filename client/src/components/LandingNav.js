import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingNav = () => {
    const nav = useNavigate()
  return (
    <div>
        <ul className=' text-[#EDCB87] gap-10 bg-black text-lg md:w-[100vw] py-8
         poppins relative z-10 items-right landing-nav pl-10 hidden md:flex'>
            <a href="#about"><li className='cursor-pointer'>About</li></a>
            <a href="#features"> <li className='cursor-pointer'>Features</li></a>
            <li >|</li>
            <li className='cursor-pointer' onClick={()=>{nav("/userlogin")}}>User Login</li>
            <li className='cursor-pointer' onClick={()=>{nav("/signup")}}>Sign Up</li>
            <li className='cursor-pointer absolute right-48' onClick={()=>{nav("/adminlogin")}}>Admin Login</li>
            <li className='cursor-pointer absolute right-10' onClick={()=>{nav("/adminsignup")}}>Admin SignUp</li>
        </ul>
    </div>
  )
}

export default LandingNav
