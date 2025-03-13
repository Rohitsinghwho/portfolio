import React from 'react'
import "./Navbar.style.css"
import { IoArrowRedoOutline } from "react-icons/io5";
const NavItems=[
    {id:1, name:"Home", url:"/home"},
    {id:2, name:"Projects", url:"/projects"},
    {id:3, name:"About", url:"/about"},
]

const handleNavClick=(urlToNavigate)=>{
    // Todo
    console.log(urlToNavigate)
}
const MenuItems = () => {
  return (
    <div className='MenuItems-container-main'>
            {
            NavItems.map((menuItem) => {
                return (
                    <div key={menuItem.id} className='MenuItems-container'>
                        <span className='navItemsName'>{menuItem.name}</span>
                        <IoArrowRedoOutline className='navIcon' onClick={()=>handleNavClick(menuItem.url)} />
                    </div>
                )
            })
            }
    </div>
  )
}

export default MenuItems