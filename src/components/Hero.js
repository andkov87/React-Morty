import React from 'react';
import {Link} from "react-router-dom";
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <p>React and Morty</p>
        <p>“Let's get this dumb universe rollin!'”</p>
        <Link to="/characters" style={{textDecoration: "none"}}> <button className='button1'> Characters </button> </Link>
        <Link to="/locations" style={{textDecoration: "none"}}><button className='button2'>Locations</button></Link>
      </div>      
    </div>
  )
}

export default Hero;