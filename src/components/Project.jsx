import React from 'react'
import v2 from '../assets/add.png'
import v3 from '../assets/v2.svg'
import v1 from '../assets/v1.svg'
import img from '../assets/img.png'

const Project = () => {
  const Projects = [
    {
      id:1,
    
    },
    {
      id:2,
       },
    {
      id:3,

       },
  ]
  return (
    <div className='text-white'>
     <img src={v2} className="p-3" />
     <h3 className='m-2 pl-4 text-4xl font-bold'>Our Awesome Portfolio</h3>
     <img src={v3} alt=""  className= 'p-3 absolute right-0'/>

     <div class="text-white body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {
        Projects.map(({id,image})=>(
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
            {image}
            <img alt="content" class="object-cover object-center h-full w-full" src={img}/>
          </div>
        
         
        </div>
        ))
      }
     
     
  </div>
  </div>
</div>
<img src={v1} className="p-3" alt="" />
  </div>
  )
}

export default Project