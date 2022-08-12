import React from 'react'
import v1 from '../assets/v2.svg'

const Contact = () => {
  return (
    <div className=''>
<section class="text-white">
  <div class=" py-24 px-3 ">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start ">
      <h1 class="flex-grow sm:pr-16 text-5xl font-extrabold text-white items-center">Contact us for the service you want to use.</h1>
      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 flex sm:mt-0 justify-center">Contact us</button>
    </div>
  </div>
  <img src={v1} alt="" className='p-3'/>
</section>
    </div>
  )
}

export default Contact