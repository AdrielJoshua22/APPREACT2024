import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Logo</h1>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#">Inicio</a></li>
                <li className="navbar-item"><a href="#">Servicios</a></li>
                <li className="navbar-item"><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
