import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingNav from './LandingNav'

const Landing = () => {
  const nav=new useNavigate()
  return (
    
    <div className='overflow-x-hidden scrollbar-container'>
      <div className='scrollbar-track'>
          <div className='scrollbar-thumb'></div>
      </div>
      <div className='w-[100vw] h-screen bg flex lg:justify-between flex-col lg:flex-row p-10 lg:p-0  lg:gap-0 overflow-x-hidden'>
        <div className='h-screen absolute top-0 left-0 overflow-hidden'>
          <img src="ripples.svg" alt="" />
        </div>
        <div className='flex flex-col gap-20'>
        <LandingNav />
        <div className='flex xl:gap-64 md:gap-48 gap-32'>
        <div className=' flex justify-center items-center lg:items-start gap-10 lg:gap-4 flex-col relative z-10 lg:left-[10vw] lg:bottom-10'>
          <h1 className='font-bold text-[128px] poppins lg:text-[128px] text-[#E98C6F]'>Rippl</h1>
          <h2 className='text-lg lg:text-[25px] poppins text-[#EDCB87]'>Let your stories ripple though hearts</h2>
          <div className='flex gap-10 lg:mt-10'>
            <button onClick={()=>{
              nav("/userlogin")
            }} className='btn-sgnup h-12 w-36 text-white poppins '>User Login</button>
            <button onClick={()=>{
              nav("/signup")
            }}
            
            className='btn-sgnup h-12 w-36 text-white poppins'>User Sign Up</button>
          </div>
          <div className='flex gap-10 lg:mt-10 md:hidden'>
            <button onClick={()=>{
              nav("/adminlogin")
            }} className='btn-sgnup h-12 w-36 text-white poppins '>Admin Login</button>
            <button onClick={()=>{
              nav("/adminsignup")
            }}
            
            className='btn-sgnup h-12 w-36 text-white poppins'>Admin Sign Up</button>
          </div>
          </div>
          <img src="landing.png" alt="" className='xl:h-96 h-64 rounded-xl'/>
        </div>
      </div>
        </div>
        <div id='about' className='about h-fit flex flex-col md:flex-row gap-16 pt-20 md:px-40 px-5 pb-10'>
          <img src="musicbox.svg" className='h-96 relative z-10' alt="" />
            <div className='flex flex-col xl:gap-20 md:gap-10 md:overflow-hidden'>
            <h2 className='poppins xl:text-4xl text-xl md:text-3xl text-[#ee653b]'>Rippl Podcasts</h2>
            <p className='poppins text-lg '>
            Welcome to the world of podcasting, where you can listen to a vast array of shows on any topic that interests you. If you're new to podcasts, or a seasoned listener looking for a better way to access your favorite shows, then you're in luck! Introducing, <b>Rippl</b>,  our brand new podcast app that will make discovering and listening to your favorite podcasts a breeze.
            </p>
            </div>
        </div>

        <div id='features' className='md:h-screen h-fit overflow-hidden bg flex items-center flex-col gap-20 pt-20 md:pl-10'>
            <h2 className='poppins text-7xl text-[#E98C6F]'>Features</h2>
            <div className='grid md:grid-cols-3 grid-cols-1'>
              <div className='flex flex-col items-center gap-10 justify-center pb-10'>
                <img src="audio.svg" alt="" className='h-24'/>
                <h3 className='poppins text-[#EDCB87] text-xl'>Audio Podcasts</h3>
                <p className='poppins px-20 text-white text-center'>Audio podcasts are a fantastic way to explore new topics, stay informed on current events, and be entertained.</p>
              </div>
              <div className='flex flex-col items-center gap-10 justify-center pb-10'>
                <img src="cam-mic.svg" alt="" className='h-24'/>
                <h3 className='poppins text-[#EDCB87] text-xl'>Video Podcasts</h3>
                <p className='poppins px-20 text-white text-center'>Video podcasts, also known as vodcasts or vidcasts, offer a unique and engaging way to consume content. </p>
              </div>
              <div className='flex flex-col items-center gap-10 justify-center pb-10'>
                <img src="search.svg" alt="" className='h-24'/>
                <h3 className='poppins text-[#EDCB87] text-xl'>User Friendly</h3>
                <p className='poppins px-20 text-white text-center'>With our simple-to-use and powerful UI, you can easily find and save your favourite podcasts </p>
              </div>
            </div>
        </div>
            <div className='flex flex-col xl:gap-20 md:gap-10  gap-5 md:overflow-hidden about pt-20 px-5 pb-20'>
            <h2 className='poppins xl:text-4xl text-2xl md:text-3xl text-[#ee653b]'>Want to be a Creator at Rippl?</h2>
            <p className='poppins text-lg '>
            You can become a creator at Rippl and post audio as well as video podcasts free of cost very easily. All you need is a dedicated <b>Admin Account</b> that you use to post content. Sign up to be an admin and you can start posting content and letting your thoughts ripple as soon as we've verified you account.   
            </p>
            </div>
    </div>
  )
}

export default Landing