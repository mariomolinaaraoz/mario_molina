import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg';

import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './mining_navbar.css'

const Menu = () => (
    <>
        <p><a href="#home"><Link to="/"> Home </Link></a></p>
        <p><a href="#mining"><Link to="/mining"> Mineria </Link></a></p>
        <p><a href="#family"><Link to="/family"> Familia </Link></a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>        
    </>
)

const Mining_Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='mining__navbar'>            
            <div className='mining__navbar_links'>                
                <div className="mining__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={click ? 'mining__navbar-links_containers active' : 'mining__navbar-links_containers'}>
                    <Menu />
                </ul>                
            </div>
            <div className="navbar-btn">
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
            </div>

            <div className="navbar-menu">
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}                    
                </div>
            </div>            
        </div>
    )
}

export default Mining_Navbar