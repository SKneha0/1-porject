import React from 'react'
import Image from 'next/image'
import Products from '@/Images/age 12 (1).png'
import Macbook from  '@/Images/MacBook2.png'
import Ipadpro  from '@/Images/IpadPro.png'
import Galaxy from   '@/Images/samG.png'




const bolg = () => {
  return (
    <div className='bg-white pt-9'>
      <div className='flex'>

      <div className=' bg-zinc-50 h-[84vh] w-[380px] '>
      <div>
       

         <Image src={Products} alt='' />
         <div className='p-6 pt-36'>
          <h1 className='text-3xl  font-normal'> Popular Products</h1>
          <p className='text-lg'> magnificenipat combines t 10.2-inch Retina dispaly, incredible performance, mutitasking and ease of use</p>
          <div className='pt-8'>
           <button className=' border-2 rounded-md w-48 h-14  border-slate-950	'>ShopNow</button>
           </div>
          </div>  
      </div>
      </div>
      
      <div className=' bg-zinc-100 h-[84vh] w-[380px] '>
      <div>
          <Image src={Ipadpro} alt='' />
          <div className='p-4'>
          <h1 className='text-3xl  font-normal'> Ipad Pro</h1>
          <p  className='text-lg'> Ipad Pro magnificenipat combines t 10.2-inch Retina dispaly, incredible performance, mutitasking and ease of use  </p>
          <div className='pt-8'>
           <button className=' border-2 rounded-md w-48 h-14  border-slate-950	'>ShopNow</button>
           </div>
          
          </div>  
      </div>
      </div>
      
      <div className=' bg-zinc-300 h-[84vh] w-[380px] '>
        <div>
          <Image src={Galaxy} alt='' />
          <div className='p-5'>
          <h1 className='text-3xl  font-normal'> Samsung Galaxy</h1>
          <p  className='text-lg'>Ipad Pro magnificenipat combines t 10.2-inch Retina dispaly, incredible performance, mutitasking and ease of use </p>
           <div className='pt-8'>
           <button className=' border-2 rounded-md w-48 h-14  border-slate-950	'>ShopNow</button>
           </div>
           
          </div>
        </div>
      </div>
      
      <div className=' bg-neutral-800 h-[84vh] w-[380px] '>
        <div>
           <Image src={Macbook} alt='' />
           <div className='p-4 text-stone-200	'>
          <h1 className='text-3xl  font-normal'>Macbook</h1>
          <p  className='text-lg '>Ipad Pro magnificenipat combines t 10.2-inch Retina dispaly, incredible performance, mutitasking and ease of use </p>
          <div className='pt-8'>
           <button className=' border-2 rounded-md w-48 h-14  border-slate-950	'>ShopNow</button>
           </div>
          </div>   
        </div>
      </div>
      
      
      </div>
    </div>
  )
}

export default bolg
