import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    DN
                </Link>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className='nav-menu-container'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                    Experience/Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;