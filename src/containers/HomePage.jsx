import React from 'react'
import Navigation from '../components/ Navigation'
import HeroSection from '../components/HeroSection'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import About from '../components/About'


const HomePage = () => {
  return (
   <>
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
   
   </>
  )
}

export default HomePage