import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    const location = useLocation();

    const isActive = (path) => location.pathname=== path;

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className={isActive('/') ? 'active' : ''}>
                    <Link to="/">Home</Link>
                    </li>
                <li className={isActive('/about') ? 'active' : ''}>
                    <Link to="/about">About</Link>
                    </li>
                <li className={isActive('/portfolio') ? 'active' : ''}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;