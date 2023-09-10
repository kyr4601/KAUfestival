import React, { useState } from 'react';
import titleImg from './../assets/images/flag.png';
import './../assets/styles/header.css';
import MenuBtn from './MenuBtn';


const Header = ({ firstDayContent, secondDayContent, page }) => {
  const [selectedDay, setSelectedDay] = useState('first-day');

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // 선택된 일자에 따라 해당 컴포넌트를 렌더링
  const renderContent = () => {
    if (selectedDay === 'first-day') {
      return firstDayContent;
    } else if (selectedDay === 'sec-day') {
      return secondDayContent;
    }
  };



  return (
    <div className='header-container'>
      <div className='menu-btn'><MenuBtn /></div>
      <div className='wrap-img'>
        <img src={titleImg} alt='Title'></img>
        <h3>{page}</h3>
      </div>
      <div className='date'>
        <div
          className={`first-day ${selectedDay === 'first-day' ? 'selected-day' : ''}`}
          onClick={() => handleDayClick('first-day')}
        >
          <p>Wed</p>
          <h1>13</h1>
        </div>
        <div
          className={`sec-day ${selectedDay === 'sec-day' ? 'selected-day' : ''}`}
          onClick={() => handleDayClick('sec-day')}
        >
          <p>Thu</p>
          <h1>14</h1>
        </div>
      </div>
      <div className='content'>{renderContent()}</div>
    </div>
  );
};

export default Header;
