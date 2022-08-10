import React from 'react'
import v3 from '../assets/v3.svg'
import add from '../assets/add.png'
import code from '../assets/code.png'

const Serv = () => {

  return (
    <div className=''>
        <img src={v3} alt="" />
        <h3 className='text-4xl text-white text-center font-bold '>The Service We Provide</h3> <br />
        <h3 className='text-white text-center text-4xl font-bold'>For You</h3>
        <img src={add} className='flex justify-end items-end right-0 absolute' alt="" />
        <section class="text-gray-400 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <img src={code} alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg  font-medium mb-3">Development</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet quo dicta id nemo recusandae tempore ex est aperiam dignissimos neque a doloremque facere reprehenderit, tenetur dolores nostrum? Cupiditate, harum?.</p>

        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
        <img src={code} alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Development</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet quo dicta id nemo recusandae tempore ex est aperiam dignissimos neque a doloremque facere reprehenderit, tenetur dolores nostrum? Cupiditate, harum?.</p>
 
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
        <img src={code} alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Development</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus amet quo dicta id nemo recusandae tempore ex est aperiam dignissimos neque a doloremque facere reprehenderit, tenetur dolores nostrum? Cupiditate, harum?.</p>

        </div>
      </div>
    </div>
   
  </div>
</section>
    </div>
  )
}

export default Serv