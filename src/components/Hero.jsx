import React from 'react'
import image from '../assets/pic1.png'

const Hero = () => {
  return (
<div className="text-white body-font">
<div className="  flex px-5 py-24 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Buld Your Awesome<br/>
        <br className="hidden lg:inline-block"/>Platform
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom ech tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Services</button>
    </div>
   </div>
   <img src={image} className="object-cover object-center" alt="" />
   </div>
    {/** 

      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2  ">
      <img className=" rounded w-[300px]" alt="hero" src={image}/>
    </div>
  </div>*/}
</div>

  )
}

export default Hero