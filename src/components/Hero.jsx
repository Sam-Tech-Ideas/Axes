import React from 'react'
import image from '../assets/pic1.png'
import v1 from '../assets/v1.svg'
import v2 from '../assets/v2.svg'

const Hero = () => {
  return (
<div className="text-white body-font">
<div className="  flex px-5 py-24 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Buld Your  Awesome<br/>
        Platform
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug k pour-over freegan heirloom neutra air plant cold<br /> tacos poke beard tote bag. Heirloom ech tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center  ">
        <button className=" text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Services</button>
    </div>
   </div>
    
     <img src={image} alt="" className='relative' />
     
     <div className='absolute text-white flex top-[72%]  justify-between'>
        <div className='pl-0'>
        <img src={v1} alt="" className=''/>
        </div>
      
      <div>
      <img src={v2} alt="" className='left-0 ' />
      </div>
      

    </div>
    
   </div>
   
</div>

  )
}

export default Hero