import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {		
		setOpen(false);		
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
        		<img src={logo} alt="logo" />
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>				
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
					Inicio
					</Link>
				</li>
				<li className="nav-item">
					<a href="https://www.mariomolinaaraoz.store/" target="_blank" className="nav-link" onClick={closeMenu}>
						Portfolio
					</a>
				</li>
				<li className="nav-item">
					<Link to="/mining" className="nav-link" onClick={closeMenu}>
						Mineria
					</Link>
				</li>
				{/*<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Contacto
					</Link>
				</li>*/}				
			</ul>
		</nav>
	);
};
export default Navbar;