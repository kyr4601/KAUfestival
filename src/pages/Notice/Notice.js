import React from 'react'
import './styles.css'
import titleImg from './../../assets/images/flag.png'
import MenuBtn from './../../components/MenuBtn';
import Accordion from '../../components/Accordian';

const Notice = () => {

  const content1 = '- 배부 장소 : 총학생회 부스\n- 재학생(+대학원생)은 오전 10시부터 수령 가능\n- 휴학생은 오후 12시부터 수령 가능\n- 12시 이전에 팔찌 소진 시 휴학생 배부 없이 마감\n- 13일, 14일 각 선착순 900명 대상으로 배부'
  const content2 = '- 팔찌를 소지해야 항대존 입장 가능\n- 훼손된 팔찌는 입장 불가\n- 졸업생 팔찌 수령 불가\n- 항대존에서 휴대폰을 제외한 카메라 사용 금지\n- 타인에게 피해되는 행동 금지(ex. 의자 사용)\n- 위험 물건 소지 시 압수 및 폐기처분 예정'
  const content3 = '- 시간 : 9월13일, 14일 오후 5~11시\n- 장소 : 강의동 앞 운동장\n- 파손 위험이 있는 물품은 행사 중 반입 금지\n- 유리병 주류 발견시 압수 및 폐기 예정\n- 쓰레기는 회수 혹은 쓰레기통에 버려주세요'
  const content4 = '- 남은 음식, 쓰레기는 지정된 장소에 버려주세요\n- 흡연 구역은 기존 교내 흡연구역을 준수해주세요\n- 강의동 오후 10시 이후 통제\n- 주점 내 유리병 주류 반입 금지'
  const content5 = '- 13일 테이블존과 피크닉존 운영\n- 피크닉존은 돗자리를 챙겨 이용해주세요\n- 테이블존은 푸드트럭 주변에 배치될 예정입니다\n- 이용 후에는 모든 쓰레기를 치워주세요\n- 새내기성공센터 부스 활동 참여 시 돗자리 제공'
  const content6 = '- 장소 : A300-600 비행기 앞\n- 시간 : 9월 13일, 14일 10 ~ 18시\n- 가격 : 1장 2000원 (짝수개로만 출력 가능)'

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
        <Accordion summary={'포토부스 안내'} children={content6}/>
      </div>
    </div>
    </div>
  )
}

export default Notice
