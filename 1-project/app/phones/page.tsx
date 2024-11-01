import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoCheckboxSharp } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";


const pages = () => {
  return (
    <div>
      <div>
        <ul className='flex gap-8 text-2xl'>
            <li>Home</li>
            <SlArrowRight className='text-2xl' /> 
            <li>Catalog</li>
            <SlArrowRight className='text-2xl' /> 
            <li>Smartphone</li>
        </ul>
      </div>
     <div>

      <div className='w-64 gap-4  grid bg-slate-600'>

        
        <div className='flex gap-32  items-center'>
          <h1 className=' text-3xl  underline-offset-1 '>Brand </h1>
             <SlArrowUp className='text-lg' />
        </div>
        
        <div>
          <input   className='bg-gray-100  w-60 h-10 rounded ' type="search" name="" id="" placeholder={`Search`} />
        </div>
       
       <div>

        <div  className='list-none gap-3 grid '> 
            <div className='flex items-center gap-2 text-xl'>  
          <IoCheckboxSharp  /> 
          <li>Apple<span className='text-xs'>110</span></li>
          </div>
            
            <div className='flex items-center gap-2 text-xl'>
            <MdCheckBoxOutlineBlank />
              <li>Samsung<span className='text-xs'>125</span> </li> 
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>Xiaomi<span className='text-xs'>68</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>Poco<span className='text-xs'>44</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>OPOP<span className='text-xs'>36</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>Honor<span className='text-xs'>10</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>Motorola<span className='text-xs'>34</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />
              <li>Nokia<span className='text-xs'>22</span> </li>
               </div>
            <div className='flex items-center gap-2 text-xl'>
              <MdCheckBoxOutlineBlank />            
              <li>Realme<span className='text-xs'>35</span> </li>
               </div>
         </div>
      
        <div className='text-2xl list-none gap-5 grid  '>
      
      <div className='flex items-center gap-20 text-xl '>
          <li>Bettery capacity </li>
                     <SlArrowDown />
    
        </div>
      
        <div className='flex items-center gap-28 text-xl '>
          <li> Screen type</li>
                      <SlArrowDown/>
      
        </div>
      
        <div className='flex items-center  gap-20  text-xl '>
          <li>Screen diagonal</li>
                      <SlArrowDown className=''/>
         
        </div>
      
        <div className='flex items-center gap-20 text-xl '>
          <li className='underline-offset-1'> Protection class</li>
                      <SlArrowDown/>
        
        </div>
      
        <div className='flex items-center gap-20 text-xl '>
          <li> Built-in memory</li>
                     <SlArrowDown />
        </div>
                    </div>
    
    
      </div>
     </div>

<div>
  <h1>hello

  </h1>
</div>
     </div>

    </div>
  )
}

export default pages

