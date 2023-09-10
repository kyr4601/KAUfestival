import React from 'react'
import './styles.css'
import titleImg from './../../assets/images/flag.png'
import MenuBtn from './../../components/MenuBtn';
import Accordion from '../../components/Accordian';

const Notice = () => {

  const content1 = '흑'
  const content2 = '- 팔찌를 소지해야 항대존 입장 가능\n- 훼손된 팔찌는 입장 불가\n- 졸업생 팔찌 수령 불가\n- 항대존에서 휴대폰을 제외한 카메라 사용 금지\n- 타인에게 피해되는 행동 금지(ex. 의자 사용)\n- 위험 물건 소지 시 압수 및 폐기처분 예정'
  const content3 = '흑'
  const content4 = '흑'
  const content5 = '흑'
  const content6 = '흑'

  return (
    <div className='booth-container'>
      <div className='header-container'>
        <div className='menu-btn'><MenuBtn /></div>
        <div className='wrap-img'>
          <img src={titleImg} alt='Title'></img>
          <h3>공지</h3>
      </div>
      <div className='notice-container'>
        <p>📢 축제와 관련된 정확한 정보는 총학에 문의해주세요 :) </p>
        <Accordion summary={'항대존 팔찌 배부'} children={content1}/>
        <Accordion summary={'항대존 유의사항'} children={content2}/>
        <Accordion summary={'주류 판매 안내'} children={content3}/>
        <Accordion summary={'주점 이용 유의사항'} children={content4}/>
        <Accordion summary={'밤도깨비 항시장'} children={content5}/>
        <Accordion summary={'포토존 안내'} children={content6}/>
      </div>
    </div>
    </div>
  )
}

export default Notice
