import React, {useState} from 'react'
import { Link } from 'react-router-dom'
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
                        <a href="/mario_molina">Inicio</a>
                    </li>
                    <li>
                        <a href="/mario_molina/mining">Mineria</a>
                    </li>
                    <li>
                        <a href="/mario_molina/family">Familia</a>
                    </li>
                    <li>
                        <a href='/mario_molina'>Contact</a>
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