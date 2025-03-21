import React from 'react'
import Header from './Components/Navbar/Header'
import Hero from './Components/HeroSection/Hero'
import MainSection from './Components/MainSection/MainSection'
import Footer from './Components/FooterSection/Footer'
const App = () => {
  return (
    <div className='main-div'>
        <Header/>
        <Hero/>
        <MainSection/>
        <Footer/>
    </div>
  )
}

export default App