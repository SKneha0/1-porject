import React from 'react'
import Image from 'next/image'
import Iphone from '@/Images/Iphone1.png'

const page = () => {
  return (
    <div>
       
      <section className='custombg flex items-center justify-around lg:flex-row flex-col'>
        <div className='px-4 flex flex-col items-center lg:items-start mt-10 lg:mt-0 '>
        <h1 className='text-white text-5xl '>Pro.Beynod.</h1>
        <h2 className='text-white text-8xl  font-light'>Iphone 14 <span className='text-white font-bold'>Pro</span></h2>
        <p className='text-white text-4xl pt-4  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        
        <button className=' w-36 h-14  mt-9 rounded-lg border-2 border-white text-white'>ShopNow</button>

        </div>
        <div>
            <Image className=''
             src={Iphone}
             alt="Iphone"
             
             />
        </div>
      </section>
</div>
  )
}

export default page
