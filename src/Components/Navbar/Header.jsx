import React from 'react'
import MenuItems from './MenuItems'
import Button from '../Utils/Button.jsx'
import { SlMenu } from "react-icons/sl";
import { useState } from 'react';
const Header = () => {


  const [isNavOpen, setIsNavOpen]=useState(true);
  const toogleMenu=()=>{
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className='Header-Container-main'>
       <div className='collapse-div'>           
          <div className='NavLogo1 w-33 raleway-bold'>
          <span>ROHIT</span>
           <span>SINGH</span>
          </div>
          <div>
          <SlMenu id='toogle-menu' onClick={toogleMenu} color='white' size={20}/>
          </div>
          </div>
       {isNavOpen&&
       <>
       <div className='w-33'><MenuItems/></div>
        <div className='NavLogo w-33 raleway-bold'>
          <span>ROHIT</span>
            <span>SINGH</span>
        </div>
        <div className='w-33 btn-div'> <Button BtnName={"Let's talk"}/></div>
        </>
      }
         
        {/* collapsable */}
        {/* collapsable */}

    </div>
  )
}

export default Header