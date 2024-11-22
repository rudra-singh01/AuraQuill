// import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import CursorAnimation from './components/CursorAnimation'
import { useCursor } from "./hooks/useCursor"
import Footer from './components/Footer'
import { useEffect } from 'react'
import Lenis from 'lenis'

const App = () => {
  const { textEnter, textLeave, isDesktop } = useCursor()
useEffect(()=>{
  // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
},[])

  return (
    <div 
      className="flex flex-col min-h-screen bg-[#0a1f1c] text-white overflow-hidden"
      style={{ cursor: isDesktop ? 'none' : 'auto' }}
    >
      <CursorAnimation />
      <main className="flex-1">
        <Navbar textEnter={textEnter} textLeave={textLeave} />
        <HeroSection textEnter={textEnter} textLeave={textLeave} />
        <AboutUs textEnter={textEnter} textLeave={textLeave} />
        <Service textEnter={textEnter} textLeave={textLeave} />
        <Testimonials textEnter={textEnter} textLeave={textLeave} />
        <Contact textEnter={textEnter} textLeave={textLeave} />
        <Footer/>
      </main>
      <WhatsAppButton phoneNumber="9958493207" textEnter={textEnter} textLeave={textLeave} />
    </div>
  )
}

export default App

