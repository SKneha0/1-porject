import React      from 'react'
import Image      from 'next/image';
import Iphone     from '@/Images/Dis Iphone 14.png';
import Ports      from '@/images/disheadphones.png';
import Applewatch from '@/images/Diswatche.png';
import Phone      from '@/images/disiwphone14(11).png';
import { IoHeartOutline } from "react-icons/io5";
const Discount = () => {
  return (
    <div className='bg-stone-500 h-[85vh] '>
      
        <div>
            <h1 className='text-3xl p-12'>Discount up to -50%</h1>
        </div>

        <div className=' flex gap-4 justify-center   '>
        <div className='bg-zinc-300 h-[57vh] w-64  pt-7 rounded-md justify-items-center'>
        <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400 ' />
        <Image src={Iphone} alt='' />
        <div className='font-medium pt-5'>
            <h1> Apple Iphone 14 Pro 512GB <br /><span className='px-11'>Gold(MQ233)</span>  </h1>
            <h2 className='text-2xl pt-3 ml-16'>$1437</h2>
            <div className='ml-6 pt-6'>
            <button className='w-36 rounded-lg h-10 bg-black text-white'>BuyNow</button>
            </div>
        </div>
        </div>
        <div className='bg-zinc-300   justify-items-center  pt-7 h-[57vh] w-64 rounded-md '>
        <IoHeartOutline className='h-10   w-8 ml-40 text-gray-400' />
        <Image  src={Ports} alt=''  />
        <div className='pt-5 font-medium '>
            <h1>AirPods Max Silver <br />starlight Aluminium </h1>
            <h2 className='text-2xl pt-3 font-medium ml-12'>$549</h2>
            <div className='ml-3 pt-6'>
            <button className='w-36 rounded-lg  h-10 bg-black text-white'>BuyNow</button>
            </div>
        </div>
        </div>
        <div className='bg-zinc-300  justify-items-center  pt-7 h-[57vh] w-64 rounded-md'>
        <IoHeartOutline className='h-10   w-8 ml-40 text-gray-400' />
           <Image  src={Applewatch} alt='' />
           <div className='font-medium pt-5  '>
            <h1>Apple Watch Series 9 GPS <br /> <span> 41mm Starlight Aluminium </span>  </h1>
            <h2 className=' ml-16 pt-3 text-2xl'>$399</h2>
            <div className='pt-6'>
             <button className='w-36 rounded-lg ml-9  h-10 bg-black text-white'>BuyNow</button>
            </div>
           </div>
        </div>
        <div className='bg-zinc-300  justify-items-center  pt-7 h-[57vh] w-64 rounded-md'>
        <IoHeartOutline className='h-10   w-8 ml-40 text-gray-400' />
              <Image    src={Phone} alt='' />
              <div className='pt-5 '>
                <h1 className='pl-6 font-medium'>Apple Iphone 14 Pro 1TB Gold  <br />  <span className='px-16 ml-4'> (MQ2V3)  </span> </h1>
                <h2 className='text-2xl pt-3 font-medium ml-8  px-16'>$1499</h2>
                <div className='px-16 pt-6 '>
                 <button className='w-36 rounded-lg h-10 bg-black   text-white'>BuyNow</button>

                </div>
               </div>              
            </div>

   </div>
      
    </div>
  )
}

export default Discount
