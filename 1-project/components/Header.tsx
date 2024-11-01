import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiInbox } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div>
        <header className='flex items-center px-10 justify-between md:px-20'>
          
      <h1 className="text-4xl  p-7 font-bold ">cyber</h1>
      <div className='hidden md:flex '>
      <input   className='bg-gray-100 ml-12 w-64 h-9 rounded ' type="search" name="" id="" placeholder={`Search`} />
      <nav className=''>
          <ul className='hidden xl:flex ml-16 gap-9   text-gray-400 '>
            <li className=' hover:text-black text-2xl'>Home</li>
            <li className=' hover:text-black text-2xl'>About</li>
            <li className=' hover:text-black text-2xl'>ContactUs</li>
            <li className=' hover:text-black text-2xl'>Blog</li>
          </ul>
        </nav>
        <div className='flex gap-7 pl-32 text-3xl'>
        <IoIosHeartEmpty className='' />
        <MdOutlineShoppingCart className='' />
        <FiInbox />
        </div>
        </div>
        <IoMenu className='flex md:hidden text-4xl'/>
            </header>
    </div>
  )
}

export default Header
