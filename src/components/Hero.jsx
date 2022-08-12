import React from 'react'
import image from '../assets/pic1.png'
import fullvid from '../assets/fullimg.png'

const Hero = () => {
  return (
<div className="text-white  ">
<div className="  flex px-5  md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="  text-5xl mb-4 font-bold text-white">Build Your  Awesome<br/>
        Platform
      </h1>
      <p className="mb-8 ">AXES Technologies is  a digital fir that offers several services such as Web and App Development, Mentoring and Training  to Developers, we <br /> tacos poke beard tote bag. Heirloom ech tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center  ">
        <button className=" text-white bg-blue-600 border-0 py-2 px-3  hover:bg-blue-700 rounded text-lg">Our Services</button>
    </div>
   </div>
    
     <img src={image} alt="" className='' />


    </div>
    <div>

    <section class="text-white ">
  <div class=" py-24 ">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start text-center">
       <p class="flex-shrink-0 text-white  border-0 py-2 px-8 flex  font-bold text-4xl mt-10 sm:mt-0 justify-center mr-3">Why Axes Is  The Best Choice?</p>
       <p class="pl-3 flex-shrink-0 text-white  border-0 py-2 px-8 flex   text-lg mt-10 sm:mt-0 justify-center">Lorem ipsum, dolor sit , labore fugit, em ut dolor ipsam.</p>
   
    </div>
  </div>
</section>

<img src={fullvid} alt="" className='w-full object-cover object-center p-4 lg:p-4'/>
    </div>
    
   </div>
   


  )
}

export default Hero