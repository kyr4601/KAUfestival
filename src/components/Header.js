import React from 'react'
import './../assets/images/main.png'
import './../assets/styles/header.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className='header-container'>
      <a href='/'>KAUnting star</a>
      <Link to="/menu">
        <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#ffffff",}} />
      </Link>
      
    </div>
  )
}

export default Header



