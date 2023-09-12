import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Portfolio from './Components/Portfollio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Testimonials/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
