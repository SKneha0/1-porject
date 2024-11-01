import React from 'react'
import Image from 'next/image'
import Topprod from '@/Images/PlayStation.png'
import Mus from '@/Images/mus.png'
import Key from '@/Images/key.png'
import Macbook from '@/Images/MacBook.png'
const topproducts = () => {
  return (
    <div className='flex' >
       
        <div >
            <div className='items-center flex '>
                    <Image  src={Topprod} alt='topprod' />
               <div className='w-[500px]'>
                <h1 className='text-4xl font-bold '>Palystation5</h1>
                <p className='text-2xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, optio autem.</p>
                </div>
            </div>
            <div>
              <div className='items-center gap-12 flex bg-zinc-200'>
                <Image src={Mus} alt='mus'  />
                <div className='w-[230px]'>
              <h1 className='font-light text-3xl'>Apple Airpods <span className='font-bold'>Max</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem  </p>
                </div>

              <div className='items-center flex gap-11 bg-zinc-800 w-[450px] h-[300px]'>
                <Image src={Key} alt='key'/>
                <div className='w-[210px] text-white '>
                  <h1 className='font-light text-3xl'>Apple Vision <span className='font-bold'>Pro</span></h1>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.</p>
                </div>
              </div>
              </div>
            </div>
             </div>

        <div className='bg-zinc-200 w-[640px] flex items-center'>
         <div className='p-8'>
          <h1 className='font-light text-5xl '>Macbook <span className='font-bold'>Air</span></h1>
          <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae itaque temporibus et atque voluptatum eveniet sequi unde nostrum?</p>
          <button className='border-2 border-black w-40 h-16 rounded-lg mt-4 ' >ShopNow</button>
        </div>
        <Image  src={Macbook} alt='Macbook'   />
        </div>

    </div>
  )
}

export default topproducts
