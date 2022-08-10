import React from 'react'

const Navbar = () => {
    const links =[
        {
            id:1,
            link:"Home",

        },
        {
            id:2,
            link:"About Us",

        },
        {
            id:3,
            link:"Services",

        },
        {
            id:4,
            link:"Projects",

        }
    ]
  return (
    <div className='bg-black w-screen h-20 text-white z-20  pb-3 mb-5 '>
       <div className='flex items-center justify-between w-full h-full px-3'>
        <div className='flex items-center'>
            <h3 className='text-2xl font-bold'>Axes</h3>
        </div>
        <ul className='hidden md:flex'>
           {
            links.map(({id,link}) =>(
                <li key={id} className='p-4 hover:text-blue-600 duration-300 text-lg'>{link}</li>
            ))
           }
        </ul>
        <div className='hidden md:flex'>
            <button className=' hover:text-white hover:bg-blue-600 px-4 border border-1-white py-1 rounded-md mr-4'>Contact Us</button>
        </div>

       </div>
    </div>
  )
}

export default Navbar


{/**


import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'Home'

        },
        {
            id:2,
            link:'About'

        },
        {
            id:3,
            link:'Contact'

        },
        {
          id:3,
          link:'Skills'

      },
      {
        id:3,
        link:'Projects'

    },
    ]
  return (
    <div className='  bg-[#07072c] w-screen h-20 z-20 text-white pb-5 mb-5'>
        <div className="flex items-center justify-between w-full h-full px-3">
            <div className='flex items-center'>
                <h3 className='text-2xl font-semibold'><span className='font-bold text-gray-500'>Sam-Tech-Ideas</span> </h3>

            </div>
                <ul className='hidden md:flex'>
                 {
                    links.map(({id,link}) =>(
                        <li key={id} className='p-4 text-xl capitalize duration-300 cursor-pointer hover:text-gray-500'>{link}</li>

                    ))
                }
               
            </ul>
      
            {/**Burger icon *
            <div className=' md:hidden'>
                <div onClick={() => setNav(true)} className='p-3 cursor-pointer'>
                                                 <FaBars size={30}/>
                    </div>
                          </div>
                      </div>
                               {/**Mobile menu *
                                          <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur':""}>
                                        <div className={nav ?  'shadow-xl fixed left-0 top-0 w-4/5 bg-gra-600 text-white h-full p-10 ease-in duration-300': 'fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full ' }>
                                    <div className='flex items-center justify-between w-full text-white'>
                                    <h3 className='text-2xl font-semibold'><span className='font-bold text-pink-700'>Sam-Tech-Ideas</span> </h3>

                               <div onClick={() => setNav(false)} className='p-3 cursor-pointer'>
                          <FaTimes size={30}/>

                          </div>
                          

                       </div>
                      <div className=''>
                    <ul className='pb-6 pt-7'>
      
                  <a href="#"><li className='p-4 text-xl '>About</li>
                </a>
              <a href="#"> <li className='p-4 text-xl'>Contact</li></a>
              <a href="#"> <li className='p-4 text-xl'>Skills</li></a>
              <a href="#"> <li className='p-4 text-xl'>Projects</li></a>
            </ul>
          </div>
                      

                 </div>
            </div>
        </div>



















        <h2 className=''>Axes</h2>
       <div className='hidden md:flex'>
       <ul>
        <li>Home</li>
       </ul>
       </div>
       <div className='hidden md:flex'>
        <button className='py-1 px-5 border  mr-4 border-l-white rounded-md'>Contact Us</button>
       </div>

export default Navbar* */}






