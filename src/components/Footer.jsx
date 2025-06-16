import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
  
<div className="flex  justify-center">
  <img src={assets.logo} alt='' className="w-32" />
</div>
  <p className='text-gray-400 mt-4'> Creating timeless jewelry pieces that celebrate life's most precious moments.

</p>



        </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href='#Header' className='hover:text-white'>Home</a>
                        <a href='#Projects' className='hover:text-white'>New Arrivals</a>
                        <a href='#About' className='hover:text-white'>Collections</a>
                                                <a href='#Testimonials' className='hover:text-white'>Best Seller</a>

                       <a href='#Contact' className='hover:text-white'>Contact</a>



                    </ul>
                </div>





                        <div className='w-full md:w-1/3'> 

                       <h3 className='text-white text-lg font-bold mb-4'>Contact Info</h3>
                       <p className='text-gray-400 mb-4 w-20'>123 Luxury Avenue
New York, NY 10001
(555) 123-4567
info@aurum.com </p>

                       <div className='flex gap-2'>
 


                      <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                      <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>


                       </div>

                        
                        
                        </div>






      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>


     Copyright 2024 © Greatstack . All Right Reserved.


      </div>
    </div>
  )
}

export default Footer

