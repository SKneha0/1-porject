import React from 'react'
import Image from 'next/image'
import Phone from '@/Images/Phones.png'
import Smartwatches from '@/Images/Smart Watches.png'
import Camera from '@/Images/Cameras.png'
import Computer  from '@/Images/Computers.png'
import Headphone from '@/Images/Headphones.png'
import Gaming from '@/Images/Gaming.png'
const Categorys = () => {
  return (
    <div className='bg-zinc-50 h-72 '>
    
<div>

        <h1 className=' text-3xl font-medium ml-52  text-start '> Brower By Categorys</h1>
</div>

        <div className='flex gap-6 justify-center mt-12 '>

        <div className='    bg-zinc-200 w-40 h-36 flex-wrap py-10 px-14  justify-center items-center rounded-2xl'>
        <Image className='items-center justify-center'
         src={Phone} 
         alt='png'   />
        <h1 className='text-lg'> phone </h1>
        </div>





        <div className='  bg-zinc-200  w-40 h-36 flex flex-col py-10   justify-center items-center rounded-2xl'>
        <Image className=''
         src={Smartwatches} 
         alt='png'   />
         



        <h1 className='text-lg '> SmartWatches </h1>

        </div>

        <div className='    bg-zinc-200  w-40 h-36 flex flex-col py-10   justify-center items-center rounded-2xl'>
        <Image className=''
         src={Camera} 
         alt='png'   />



        <h1 className='text-lg'> Cameras </h1>

        </div>

        <div className='    bg-zinc-200  w-40 h-36 flex flex-col py-10   justify-center items-center rounded-2xl'>
        <Image className=''
         src={Headphone} 
         alt='png'   />



<div>
        <h1 className='text-lg'> Headphones </h1>

</div>

        </div>

        <div className='    bg-zinc-200  w-40 h-36 flex flex-col py-10   justify-center items-center rounded-2xl'>
        <Image className=''
         src={Computer} 
         alt='png'   />



<div>

        <h1 className='text-lg'> Computers </h1>
</div>

        </div>

        <div className='    bg-zinc-200  w-40 h-36 flex flex-col py-10   justify-center items-center rounded-2xl'>
        <Image className=''
         src={Gaming} 
         alt='png'   />
         <div>  
            <h1 className='text-lg'> Gaming  </h1> 
       </div>
        </div>

       
        </div>
    
    
    </div>
  )
}

export default Categorys
