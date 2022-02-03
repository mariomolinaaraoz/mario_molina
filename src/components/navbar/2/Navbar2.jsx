import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assets/logo.svg';

import './navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='header_items'>
                <img src={logo} alt="logo" />
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink
                            classname={({ isActive }) => (isActive ? "nav-menu.active" : "nav-menu")}
                            to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mining">Mineria</NavLink>
                    </li>
                    <li>
                        <NavLink to="/family">Familia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
            </div>
            <div className='container'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={28} style={{color: '#fff'}}/>) : (<FaBars size={28} style={{color: '#fff'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar