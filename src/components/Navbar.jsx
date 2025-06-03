import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react'
import './Navbar.css';

function Navbar () {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const isActive = (path) => location.pathname=== path;

    const toggleMenu =() => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className="navbar">
            <div className="logo">Ida</div>
            <div className="hamburger" onClick={toggleMenu}>☰</div>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
                    <Link to="/">Home</Link>
                    </li>
                <li className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
                    <Link to="/about">About</Link>
                    </li>
                <li className={isActive('/portfolio') ? 'active' : ''} onClick={closeMenu}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;