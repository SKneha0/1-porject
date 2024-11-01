import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { RiTiktokFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
        <div className='      bg-black py-10 text-gray-100'>
    <div className=' justify-evenly flex flex-wrap gap-20 px-10'>
             <div>      
                   <h1 className='text-xl  font-semibold'>Cyber</h1>
                   <div className='text-gray-200'>
                    <p>We are a residential interrior firm located in <br/> portland. Our boutique-studio offers more than</p>
                   </div>

                  <div className='flex gap-8 pt-20 '>
                  <AiOutlineTwitter />
                  <ImFacebook />
                  <RiTiktokFill />
                  <AiFillInstagram />
                  </div>
               </div>
            
             <div>
                  
                  <h1 className='font-semibold text-xl '>Servicse</h1>
                  <div className='list-none gap-3 grid  '>
                 <li>  Bouns program        </li>
                 <li>   Gift cards          </li>
                 <li>   credit and payments </li>
                 <li>   Serives contracts   </li>
                 <li>  Non-Cash account     </li>
                 <li>   Payment             </li>  
                  </div>
             </div>

            <div>
           
                  <h1 className='font-semibold text-xl '>Assistance to the buyer</h1>

                  <div className='list-none gap-3 grid'>

                    <li>   Find and order              </li>
                    <li>  Terms of delivery            </li>
                    <li>  Exchange and return of goods </li>
                    <li>  Guarantee                    </li>
                    <li>  Frequently askeed questions  </li>
                    <li>  Terms of use of the site     </li>
                  </div>
            </div>
 </div>


</div>
  )
}

export default Footer
