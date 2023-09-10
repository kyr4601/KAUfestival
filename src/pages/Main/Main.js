import React from 'react';
import {useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Typo from '../../components/Typing';
import logoImg from '../../assets/images/logo.png'
import talkImg from '../../assets/images/talk.png'
import choiceImg from '../../assets/images/choice.png'
import bgm from '../../assets/audio/mainbgm.mp3'

import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Main = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);


  const handlePlay = () => {
    audioRef.current.play();
  };

  // const handlePause = () => {
  //   audioRef.current.pause();
  // }

  const handleClick = (tabName) => {
    setActiveTab(tabName);
    setTimeout(() => {
      if (tabName === '부스') {
        navigate("/booth");
      } else if (tabName === '공연') {
        navigate("/concert");
      } else if (tabName === '공지') {
        navigate("/notice");
      } else if (tabName === '만든이') {
        navigate("/about");
      }
    }, 1000);
  }

  
  return (
    <div className='main-container'>
      <audio
        id='song'
        autoPlay={true}
        loop={true}
        ref={audioRef} >
        <source type="audio/mp3" src={bgm} />
      </audio>
      <FontAwesomeIcon icon={faCirclePlay} onClick={handlePlay}  size="2xl" className='play-btn' style={{color: "#fff"}} />
      <div className='title-container'>
        <p>2023 한국항공대학교 대동제</p>
        <img src={logoImg} alt='로고'></img>
      </div>
      <div className='talk-container'>
        <div className='wrap-container'>
          <img className='talk-box' src={talkImg} alt='말풍선'></img>
          <img className='choice-box' src={choiceImg} alt='메뉴'></img>
          <div className='choice-list'>
          <div className={`word-box ${activeTab === '부스' ? 'active' : ''}`} onClick={() => handleClick('부스')}>
              <p>부스</p>
              {activeTab === '부스' && <div className='line'></div>}
            </div>
            <div className={`word-box ${activeTab === '공연' ? 'active' : ''}`} onClick={() => handleClick('공연')}>
              <p>공연</p>
              {activeTab === '공연' && <div className='line'></div>}
            </div>
            <div className={`word-box ${activeTab === '공지' ? 'active' : ''}`} onClick={() => handleClick('공지')}>
              <p>공지</p>
              {activeTab === '공지' && <div className='line'></div>}
            </div>
            <div className={`word-box ${activeTab === '만든이' ? 'active' : ''}`} onClick={() => handleClick('만든이')}>
              <p>만든이</p>
              {activeTab === '만든이' && <div className='line'></div>}
            </div>
          </div>
          {/* <p>한국항공대학교 대동제에 온 걸 환영해구리-!{'\n'}
          찾고 있는 게 있다면 나한테 말해봐!</p> */}
          <Typo />
        </div>
      </div>
      
    </div>
  )
}

export default Main
