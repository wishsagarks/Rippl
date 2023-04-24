import React, { useState } from 'react'
import axios from "axios";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/admin/signup", { email, password });
      // Redirect to login page after successful signup
      window.location.href = "/adminlogin"
    } catch (err) {
      setError("Error signing up. Please try again.");
      console.log(error)
    }
  };
  return (
    <div className='h-screen w-full public-route-bg overflow-hidden'>
      <div className='h-screen overflow-hidden absolute'>
        <img src="ripples.svg" alt="" className='' />
      </div>
      <div className='flex justify-around flex-col lg:flex-row'>
        <div className='flex flex-col items-center gap-16 pt-16 relative z-10 xl:pl-96 '>
          <h1 className='poppins text-[#E0AA71] font-bold text-6xl'>ADMIN SIGN UP</h1>
          <form onSubmit={handleSubmit} action="signup" className='flex flex-col gap-8 items-center'>
            <input onChange={(e) => { setEmail(e.target.value) }} type="username" placeholder='Username' className='bg-[#EBC990] rounded-lg p-2 px-10 text-[#000] placeholder-slate-600 poppins ' />
            <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' className='bg-[#EBC990] rounded-lg p-2 px-10 text-[#000] placeholder-slate-600 poppins ' />
            <button type='submit' className='submit-button rounded-full py-2 w-48 font-bold text-lg'>Submit</button>

            {/* <div id='signin'></div> */}
          </form>
        </div>
        <div className='xl:pt-60 pl-50 scale-75 md:scale-100 md:-bottom-40 md:left-40 xl:bottom-0 xl:left-10 relative bottom-12  lg:block'>
          <img src="camera.svg" alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default SignUp