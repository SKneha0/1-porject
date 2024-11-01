import React from 'react'
import { IoHeartOutline } from "react-icons/io5";
import Image     from 'next/image'
import Iphone    from '@/Images/Iphone14pro.png'
import Camer     from '@/Images/Cameras2.png'
import Watchec   from '@/Images/SmartWatches2.png'
import Hphone    from '@/Images/Headphones2.png'
import Samwatche from '@/Images/samsungWatche.png'
import Zfold     from '@/Images/GalaxyPhone.png'
import  Galaxyairpods   from '@/Images/GalaxyAirprot.png'
import    Ipads       from '@/Images//Ipat.png'


const Products = () => {
  return (
    <div className='bg-white '>
    
   <div>
   
      <div className=' flex gap-9   pt-8 ml-[18%]  text-lg '>
        <h1 className=' hover:underline   text-stone-400 font-medium hover:text-black'>New Arrival</h1>
        <h2 className=' hover:underline   text-stone-400 font-medium  hover:text-black'>Bestseller</h2>
        <h3 className=' hover:underline   text-stone-400 font-medium hover:text-black'>Featured Products</h3>
      </div>

      <div className='gap-9 flex justify-center pt-6  '>
      
      <div className='h-[49vh] rounded-xl flex-col  bg-gray-100 justify-items-center  w-56'>
      <IoHeartOutline className='h-10 w-8 ml-40  text-gray-400' />
        <Image src={Iphone} alt='' />
        <div className='flex-col justify-items-center pt-4 '>
        <h1 className='ml-2 text-sm font-bold'> Apple Iphone14 Pro Max </h1>
        <h2 className='text-sm font-bold'>128GB Deep Purple</h2>
        <h3 className='font-bold text-2xl p-3'>$900</h3>
        <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
        </div>
      </div>

      <div className='h-[49vh] rounded-xl bg-gray-100  w-56 justify-items-center'>
      <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400' />
        <Image src={Camer} alt='Camera2 '  />
        <div className='justify-items-center pt-3'>
          <h1 className='text-sm font-bold'>Blackmagic Pocket Cinema</h1>
          <h2 className='text-sm font-bold'>Camera 6k</h2>
          <h3  className='text-2xl font-bold p-3'>$2535</h3>
          <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
        </div>

      </div>

      <div className='h-[49vh] rounded-xl justify-items-center bg-gray-100  w-56'>
             <IoHeartOutline className='h-10  w-8 ml-40 text-gray-400' />
             <Image   src={Watchec} alt='Hphones' />
             <div className='justify-items-center pt-3'>
              <h1 className='text-sm font-bold'>Apple Watches Series 9 GPS</h1>
              <h2 className='text-sm font-bold'>41mm Starlight Aluminium </h2>
              <h3 className='text-2xl font-bold p-3'>$399</h3>
              <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
             </div>
      </div>

      <div className='h-[49vh] rounded-xl justify-items-center bg-gray-100  w-56'>
           <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400' />
           <Image src={Hphone} alt='Hphone' />
           <div className='justify-items-center pt-3'>
            <h1 className='text-sm font-bold'> AirPods Max silver</h1>
            <h2 className='text-sm font-bold' >Starlight Aluminium </h2>
            <h3 className='text-2xl font-bold p-3'>  $549</h3>
            <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
           </div>
      </div>
      
      </div>
      <div className='gap-9 flex justify-center pt-9'>
      
      <div className='h-[49vh] rounded-xl justify-items-center bg-gray-100  w-56'>
         <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400' />
         <Image src={Samwatche} alt='' />
         <div className='justify-items-center pt-3'>
        <h1  className='text-sm font-bold'>Samsung Galaxy Watches6</h1>
        <h2 className='text-sm font-bold'>Classic 47mm Black</h2>
        <h3 className='text-2xl font-bold p-3'>$369</h3>
        <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
         </div>
      </div>
      
      <div className='h-[49vh] rounded-xl justify-items-center bg-gray-100  w-56'>
          <IoHeartOutline className='h-10 w-8 ml-40  text-gray-400' />
          <Image src={Zfold} alt='' />
         <div className='justify-items-center pt-3'>
          <h1  className='text-sm font-bold'>Galaxy Z Fold5 Unlocked|</h1>
          <h2 className='text-sm font-bold'>256GB | Phantom Black</h2>
          <h3 className='text-2xl font-bold p-3'>$1799</h3>
          <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
         </div>
    

      </div>
      <div className='h-[49vh] rounded-xl  justify-items-center bg-gray-100  w-56'>
           <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400' />
           <Image src={Galaxyairpods} alt='' />
           <div className='justify-items-center pt-3'>
            <h1  className='text-sm font-bold'>Galaxy Buds FE</h1>
            <h2 className='text-sm font-bold'>Graphite </h2>
            <h3 className='text-2xl font-bold p-3'>$99.99</h3>
            <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
           </div>
      </div>
      
      <div className='h-[49vh] rounded-xl justify-items-center bg-gray-100  w-56'>
          <IoHeartOutline className='h-10 w-8 ml-40 text-gray-400' />
          <Image src={Ipads} alt='' />
          <div className='justify-items-center pt-3'>
            <h1  className='text-sm font-bold'>Apple Ipat 9 10.2 64GB wi-Fi</h1>
            <h2 className='text-sm font-bold'>Silver (MK2L3) 2021 </h2>
            <h3 className='text-2xl font-bold p-3'>#398</h3>
            <button className='bg-black text-white border-4 w-36  rounded-xl border-black'>Buy Now</button>
          </div>
      </div>
      
      </div>

    </div>
    </div>
  )
}

export default Products
