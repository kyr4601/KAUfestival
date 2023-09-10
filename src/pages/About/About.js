import React from 'react'
import './styles.css'
import titleImg from './../../assets/images/flag.png'
import MenuBtn from './../../components/MenuBtn'
import meImg from './../../assets/images/me.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className='head-container'>
        <div className='menu-but'><MenuBtn /></div>
        <div className='wrap-img'>
          <img src={titleImg} alt='Title'></img>
          <h3>만든이</h3>
      </div>
      <div className='white-box'>
        <p>안녕하세요! 이번 2023년 한국항공대학교<br />
          대동제 안내 페이지를 제작한 창업 개발 동아리<br />
          <span>멋쟁이사자처럼</span> 입니다.
        </p>
        <p>
        1년 중 가장 기다려온 행사인 만큼<br />
        모두에게 즐거운 축제가 되었으면 합니다.<br />
        함께 기억에 남는 대동제를 만들어봐요!<br />감사합니다 😊
        </p>
        <h3>항공대 멋사가 궁금하다면?</h3>
        <a href='https://www.instagram.com/kau_likelion/'>항공대 멋사 인스타 ⟫</a>
        <h2>멋쟁이사자처럼<br />Front-End 운영진</h2>
        <h1>RIN</h1>
        <img src={meImg} alt='me'className='me'></img>
      </div>
      
    </div>
    </div>
  )
}

export default About
