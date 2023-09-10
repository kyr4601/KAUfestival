import React from 'react';
import './../assets/styles/shortbtn.css';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShortBtn = ({ btnTitle, style, onClick, isSelected }) => {
  return (
    <div
      style={style}
      className={`short-btn ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className={`icon ${isSelected ? 'selected' : ''}`} style={style.transform === 'rotate(90deg)' ? { transform: 'rotate(-90deg)', whiteSpace: 'pre', top: '6px', left: '0'} : {}}>
        <FontAwesomeIcon icon={faLocationDot} bounce size="lg" />
      </div>
      <div style={style.transform === 'rotate(90deg)' ? { transform: 'rotate(-90deg)', whiteSpace: 'pre', textAlign: 'center' } : {}}>
        {btnTitle}
      </div>
    </div>
  );
}

export default ShortBtn;
