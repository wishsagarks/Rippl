import React, { useState, useEffect } from 'react'

const PhoneNav = () => {
    return (
        <div className='nav-bg w-full h-[10vh] absolute bottom-0 z-10 items-center justify-center overflow-hidden '>
            <ul className='flex px-10 justify-around items-center'>
                <li>
                    <img src="homeicon.svg" alt="home" className='px-[10vw] pt-5 cursor-pointer'/>
                </li>
                <li>
                    <img src="likedicon.svg" alt="home" className='px-[10vw] pt-5 cursor-pointer'/>
                </li>
                <li>
                    <img src="trendicon.svg" alt="home" className='px-[10vw] pt-5 h-14 cursor-pointer'/>
                </li>
            </ul>
        </div>
    )
}

const DeskNav = () => {
  return (
    <div className='h-auto w-[20vw] nav-bg flex flex-col gap-10 position-fixed'>
        <img src="logo.svg" alt="" className='h-60 px-10 pt-10'/>
        <ul className='text-[#F7CE7A] poppins flex flex-col gap-5 pl-16'>
            <li className='flex gap-4 items-center text-sm cursor-pointer'>
                <img src="homeicon.svg" alt="home" className='h-7'/>
                Home
            </li>
            <li className='flex gap-4 items-center text-sm cursor-pointer'>
                <img src="likedicon.svg" alt="liked" className='h-7'/>
                Liked
            </li>
            <li className='flex gap-4 items-center text-sm cursor-pointer'>
                <img src="trendicon.svg" alt="trending" className='h-7'/>
                Trending
            </li>
        </ul>
        <div className='flex flex-col gap-3 border-[#F7CE7A]'>
            <div className='h-[2px] w-[20vw] bg-[#F7CE7A]'></div>
            <div className='h-[2px] w-[20vw] bg-[#F7CE7A]'></div>
        </div>
    </div>
  )
}

const Nav = () => {
      
  const [width, setwidth] = useState(window.innerWidth)
  const breakpoint = 1024

  useEffect(() => {
    window.addEventListener("resize", () => setwidth(window.innerWidth))
  }, [])
    return width < breakpoint ? < PhoneNav /> : <DeskNav />
}

export default Nav
