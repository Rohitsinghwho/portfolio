import React, { useState } from 'react'
import "./Footer.style.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import MenuItems from '../Navbar/MenuItems.jsx'

const Footer = () => {
    // using null as value is unknown
  const [email,setEmail]=useState('rohiinegi@gmail.com');
  const [message,setMessage]=useState('Hey i want the project file link');
  return (
    <footer className='Footer-container-main'>
        <div className="Footer-inner-container">
        <div className="Footer-form">
            <form className='form-mail'>
                <div className="mail-address-container">
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" placeholder={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="message-container-div">
                    <label htmlFor="message">Message</label>
                    <textarea id='message' name="message" cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button className="btn-send">Send</button>
            </form>
        </div>
        <div className='Footer-container-items'>
            <div className="socials">
            <FaLinkedin size={30} />
            <FaGithub size={30}/>
            <FaInstagramSquare size={30} />
            </div>
        </div>
        <div className='menu'>
        <MenuItems/>
        </div>
        </div>
       
        <span className='copyright-div'>@Copyright 2025 Rohit Singh</span>
    </footer>
  )
}

export default Footer