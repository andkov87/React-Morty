import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../images/rm-logo.png';
import './Navbar.css';

const Navbar = () => {


    return (
      <div className='navbar'>
        <div className='logo'>
           <Link to="/" style={{textDecoration: "none"}}> <img src={Logo} alt='logo' /></Link>
        </div>
        <ul className='nav-menu'>
            <Link to="/" style={{textDecoration: "none"}}><li className='nav-item'>HOME</li> </Link>
            <Link to="/characters" style={{textDecoration: "none"}}><li className='nav-item'>characters</li></Link>
            <Link to="/locations" style={{textDecoration: "none"}}><li className='nav-item'>locations</li></Link>
        </ul>
      </div>
  );
}

export default Navbar;

