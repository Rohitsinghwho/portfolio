import React from 'react'
import Skills from './Skills'
import "./MainSection.style.css"
import Main_Cart from './Main_Cart'
const MainSection = () => {
  return (
    <section className='Main-section-container'>
        <h2 className='Main-section-title raleway-bold'>A Designer Must have Skills to Craft the Masterpiece</h2>
        <Skills/>
        <Main_Cart/> 
    </section>
  )
}

export default MainSection