import React from 'react'
import Image from 'next/image'
import Bannerimage from '@/Images/Banner.png'
const Banner = () => {
  return (
    <div className='relative h-[62vh]'>

          <div className='justify-items-center pt-44 text-white'>
               <h1 className='text-7xl font-light'>Big Summer <span className='font-semibold' > sale </span></h1>
                <p>Commode frmes vitae leo mauris in.Eu consequat </p>
                  <div className='pt-14'>
                  <button className='rounded-lg   border-2 w-56 h-16   border-gray-300'>Shop Now</button>

                  </div>
                  
             </div>
      <Image   className='w-[100vw] absolute top-0 -z-10'
      src={Bannerimage} 
       alt=''
       width={0} 
      />


    </div>
  )
}

export default Banner
