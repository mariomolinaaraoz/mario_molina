import React from 'react'
import { Link } from 'react-router-dom';
import {FaInstagram, FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import logo from '../../assets/logo-black.svg';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <Link to="/mario_molina/" className="footer-logo">
          		        <img src={logo} alt="logo" />
			        </Link>
                </div>                
                {/*<div className='col'>
                    <h5>Soporte</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Desarrollo</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Empresa</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>*/}
                <div className='col'>
                    <h5>Redes</h5>
                    <span className='bar'> </span>
                        <a href='https://github.com/mariomolinaaraoz'><FaGithub className='icon'/>Github</a>
                        <a href='https://www.instagram.com/mariomolinaaraoz/'><FaInstagram className='icon'/>Instagram</a>
                        <a href='https://www.linkedin.com/in/mario-molina-araoz-4478365a/'><FaLinkedin className='icon'/>Linkedin</a>
                        <a href='mailto:mariomolinaaraoz@gmail.com'><FaEnvelope className='icon'/>Email</a>
                </div>
            </div>
            <div className='creator'>
                    <h6>Desarrollado por Mario Molina Araoz</h6>
                    <h6>- Enero 2022 - </h6>
            </div>            
        </div>
        
    )
}

export default Footer