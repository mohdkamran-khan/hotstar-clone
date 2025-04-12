import React from 'react'
import sitelogo from '.././Images/sitelogo.png'
import{ HiHome,HiMagnifyingGlass}from "react-icons/hi2";
import { CgProfile } from "react-icons/cg"; 
import { FiTv } from "react-icons/fi";
import { PiFilmSlateThin } from "react-icons/pi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Header() {
  return (<>
    <div className='header text-white flex items-center gap-20 my-0 p-1 m-1 bg-black  '>
    <div className= "brandLogo px-4 py-1 items-center">
      <img src={sitelogo} className='w-[120px] h-[50px]'/>
      <button class="bg-transparent text-yellow-500 py-0 px-4 flex items-center pt-1">Subscribe <IoIosArrowForward /></button>    
    </div>

    <div className='myspace flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 trannonesition-all duration-300 ease-in-out text-white'>
     <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter> <CgProfile/>My Space
    </div>
    
    <div className="search flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out">
      <HiMagnifyingGlass/> Search
    </div>

    <div className="home flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out">
      <HiHome/> Home
    </div>

    <div className='tv flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out'>
      <FiTv/> TV
    </div>

    <div className='movies flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out'>
    <PiFilmSlateThin />Movies
    </div>

    <div className='sports flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out'>
    <MdOutlineSportsBaseball />Sports
    </div>

    <div className='categories flex items-center gap-2 font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-110 transition-all duration-300 ease-in-out'> 
      <BiCategory /> Categories
    </div>
    </div>

  </>)
}

export default Header
