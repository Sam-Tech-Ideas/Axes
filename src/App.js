import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './App.css'
import Serv from './components/Serv'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' '>
      <Navbar/>
      <Hero/>
      <Serv/>
      <Project/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default App