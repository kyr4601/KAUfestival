import React, { useState } from "react";
import './../assets/styles/menubtn.css'
import menu1 from './../assets/images/menu1.png'
import menu2 from './../assets/images/menu2.png'
import menu3 from './../assets/images/menu3.png'
import menu4 from './../assets/images/menu4.png'

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-dropdown">
      <div className={`e-button ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
        <div className="e-burger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`e-list ${isOpen ? "open" : ""}`}>
        <li><a href="/booth"><img className='menuimg' src={menu1} alt="부스"/><p className="menu1">부스</p></a></li>
        <li><a href="/concert"><img className='menuimg' src={menu2} alt="공연"/><p className="menu2">공연</p></a></li>
        <li><a href="/notice"><img className='menuimg' src={menu3} alt="공지"/><p className="menu3">공지</p></a></li>
        <li><a href="/about"><img className='menuimg' src={menu4} alt="멋사"/><p className="menu4">멋사</p></a></li>
       
      </ul>
    </div>
  );
}

export default MenuBtn;
