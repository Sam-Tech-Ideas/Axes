import React from 'react'
import image from '../assets/pic1.png'
import fullvid from '../assets/fullimg.png'

const Hero = () => {
  return (
<div className="text-white body-font">
<div className=" container flex px-5  md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Buld Your  Awesome<br/>
        Platform
      </h1>
      <p className="mb-8 ">Copper mug k pour-over freegan heirloom neutra air plant cold<br /> tacos poke beard tote bag. Heirloom ech tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center  ">
        <button className=" text-white bg-indigo-500 border-0 py-2 px-3  hover:bg-indigo-600 rounded text-lg">Our Services</button>
    </div>
   </div>
    
     <img src={image} alt="" className='' />


    </div>
    <div>
    <div class="">
  <div class=" py-24 ">
    <div class=" flex flex-col sm:flex-row  text-center">
      <h1 class="  text-4xl font-extrabold  text-white">Why AXES is the best choice.</h1>
      <p class="flex-shrink-0 text-white  border-0 py-2 px-8  text-xl mt-10 sm:mt-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto <br /> saepe molestiae harum optio ullam recusandae, qui accusamus, iste sit velit eligendi eaque labore pariatur facere totam at officiis culpa iure!</p>
    </div>
  </div>
</div>
<img src={fullvid} alt="" className='w-full object-cover object-center p-4 lg:p-4'/>
    </div>
    
   </div>
   


  )
}

export default Hero