import React from 'react'
import logo from './Data/Images/logo.png';
import { NavLink } from 'react-router-dom';
import { navlink } from './Data/Dummydata';
import "../App.css"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
  const [responsive, setresponsive] = useState(false);
  return (
    <>
    <header>
    <div className="container flexsb">
    <div className="logo">
    <img className='log' src={logo} alt="" data-aos="zoom-in-down" />
    </div>
    <div className={responsive ? "hideMenu" : "nav"}>
    {navlink.map((link,i) =>(
    <NavLink className="nav-link" to={link.url} data-aos="zoom-in-up" >{link.text}</NavLink>
    
    ))}
    </div>
    <button className='toggle'onClick={() => setresponsive(!responsive)} >
    <MenuIcon className='icon'></MenuIcon>
    </button>
    </div>
    
    </header>
    
    </>
  )
}

export default Header