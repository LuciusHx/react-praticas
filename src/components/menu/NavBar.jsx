import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="logo" className="logo"/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/contatos'>Contatos</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;