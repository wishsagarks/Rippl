import React, { useEffect,useState } from 'react'
import jwt_decode from 'jwt-decode'

import axios from "axios";
import { Navigate } from "react-router-dom";
function auth() {
  if(sessionStorage.getItem("token"))
   return true
  else 
   return false
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    if(auth())
      window.location.href = "/dashboard";
      
      
    }, [])
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(email,password)
        const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
        console.log(response)
        sessionStorage.setItem("token", response.data.token);
        window.location.href = "/dashboard";
      // navigate("/dashboard"); // Navigate to Dashboard after successful login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // const handlecallback = (res) => {
  //   console.log("encoded jwt: " + res.credential)
  //   var user = jwt_decode(res.credential)
  //   console.log(user)
  // }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "666648311637-evi0htp8p6bmc3hab7ok817etv97v85l.apps.googleusercontent.com",
  //     callback: handlecallback
  //   })
  //   google.accounts.id.renderButton(
  //     document.getElementById("signin"),
  //     { theme: "outline", size: "large" }
  //   )

  // }, [])
  return (
    <div className='h-screen w-full public-route-bg overflow-hidden'>
      <div className='h-screen overflow-hidden absolute'>
        <img src="ripples.svg" alt="" className='' />
      </div>
      <div className='flex justify-around flex-col lg:flex-row'>
        <div className='flex flex-col items-center gap-16 pt-16 relative z-10 xl:pl-96 '>
          <h1 className='poppins text-[#E0AA71] font-bold text-6xl'>LOGIN</h1>
          <form action="signup" className='flex flex-col gap-10  items-center' onSubmit={handleSubmit}>
            <input onChange={(e)=>{
              setEmail(e.target.value)              
              }}
              type="username" placeholder='Username' className='bg-[#EBC990] rounded-lg p-2 md:px-10 px-8 text-[#000] placeholder-slate-600 poppins ' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='bg-[#EBC990] rounded-lg p-2 md:px-10 px-8 text-[#000] placeholder-slate-600 poppins ' />
            <button type='submit' className='submit-button rounded-full py-2 w-48 font-bold text-lg hover:opacity-50'>Submit</button>

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

export default Login