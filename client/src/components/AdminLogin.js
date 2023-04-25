import React, { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
// import jwt_decode from 'jwt-decode'

function adminAuth() {
  if(sessionStorage.getItem("admin"))
   return true
  else 
   return false
}

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(adminAuth())
    window.location.href = "/admin";
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual API endpoint
    const response = await fetch('https://ripplpodcasts.live/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {

      const { token } = await response.json();
      sessionStorage.setItem('admin', token);
      navigate('/admin');
    } else {

      console.log('Admin login failed');
    }
  };
  return (
    <div className='h-screen w-full public-route-bg overflow-hidden'>
      <div className='h-screen overflow-hidden absolute'>
        <img src="ripples.svg" alt="" className='' />
      </div>
      <div className='flex justify-around flex-col lg:flex-row'>
      
      <img
      
      onClick={(e)=>{
        e.preventDefault()
        window.location.href='./'
      }}
      src="logo.svg"
      alt=""
      className="md:h-24 h-12 cursor-pointer ml-10 mt-10 absolute z-20 left-0 top-0"
      />
        <div className='flex flex-col items-center gap-16 pt-16 lg:ml-48 xl:ml-0 relative z-10 xl:pl-96 '>
          <h1 className='poppins text-[#E0AA71] font-bold md:text-5xl text-2xl uppercase'>Admin LOGIN</h1>
          <form onSubmit={handleSubmit} action="signup" className='flex flex-col gap-10  items-center'>
            <input onChange={(e) => setEmail(e.target.value)} type="username" placeholder='Email' className='bg-[#EBC990] focus:outline-none rounded-lg p-2 md:px-10 px-8 text-[#000] placeholder-slate-600 poppins ' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='bg-[#EBC990] focus:outline-none rounded-lg p-2 md:px-10 px-8 text-[#000] placeholder-slate-600 poppins ' />
            <button type='submit' className='submit-button rounded-full py-2 w-48 font-bold text-lg'>Submit</button>
            <div className="text-white">Not a creator? <span className="cursor-pointer text-[#e0aa71] font-semibold"
            onClick={(e)=>{
              e.preventDefault()
              window.location.href="/adminsignup"
            }}
            >Click Here</span></div>
            {/* <div id='signin'></div> */}
          </form>
        </div>
        <div className='xl:pt-60 pl-50 scale-75 md:scale-80 md:pr-20 md:-bottom-40 md:left-40 xl:bottom-0 xl:left-10 relative bottom-12 lg:block'>
          <img src="camera.svg" alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin