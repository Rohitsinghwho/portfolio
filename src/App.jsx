import React from 'react'
import Header from './Components/Navbar/Header'
import Hero from './Components/HeroSection/Hero'
import MainSection from './Components/MainSection/MainSection'
const App = () => {
  return (
    <div className='main-div'>
        <Header/>
        <Hero/>
        <MainSection/>
    </div>
  )
}

export default App