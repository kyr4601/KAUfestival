import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import CardSlider from '../../components/CardSlider'
import Timeline from '../../components/Timeline'

const Concert = () => {

  

  const cardsDayOne = [
    {
      imgUrl: 'https://i.namu.wiki/i/IMPKue3MGX68pVS3Bxcg13GJgMhAVH-gNn1LhimEA2BsMl2v3Ae0AzdGo32LxqN651WxRBIHChrrnn-ryMa4mELeq4QmaQFRx6kUiqxvt-Tt5R6srhTEv5dKpzLWFUIhdiYOt0yrblyGlZczn0RzLA.webp',
      text: 'HAHA'
    },
    {
      imgUrl: 'https://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_300988_16490393424997436.jpg',
      text: 'Heize'
    },
    {
      imgUrl: 'https://cdn.rnx.kr/news/photo/202209/311479_319388_498.jpg',
      text: 'Fil'
    }
  ];

  const cardsDayTwo = [
    {
      imgUrl: 'https://img.hankyung.com/photo/202101/01.24913904.1.jpg',
      text: 'Woody'
    },
    {
      imgUrl: 'https://i.namu.wiki/i/ufRvBw19RbHg81nnXnI7UnuLL7IyY7Su_dMrd6UJ-5u521k0IwXSjgSypeQi4AYGHvwFJ6Ej-l1X3Tzj5MxvAVuS88qyIvqF58o7qwZjiwODfQhqNe_y6vThCCMkngxIFZ8Vs4hKXstVMB___TWt7g.webp',
      text: 'DynamicDuo'
    },
    {
      imgUrl: 'https://i.pinimg.com/564x/57/33/e6/5733e6de491bec2fa2900076b3941098.jpg',
      text: 'DJ공연'
    }
  ];

  const items1 = [{
    cardTitle: "활주로",
    cardSubtitle:"18:00 - 18:22",
    cardDetailedText: "중앙락밴드 동아리 활주로 RUNWAY",
   
  },
  {
    cardTitle: "올뮤",
    cardSubtitle:"18:22 - 18:47",
    cardDetailedText: "밴드 동아리 All_About_Music",
   
  },
  {
    cardTitle: "우리부모",
    cardSubtitle:"18:47 - 19:12",
    cardDetailedText: "중앙 밴드 동아리 '우리' 노래 '부'르기 '모'임",
  },
  {
    cardTitle: "MC 레크레이션",
    cardSubtitle:"19:12 - 19:42"
  },
  {
    cardTitle: "재징유",
    cardSubtitle:"19:42 - 20:07",
    cardDetailedText: "중앙 재즈 동아리 ZAZZING YOU",
  },
  {
    cardTitle: "에어락",
    cardSubtitle:"20:07 - 20:32",
    cardDetailedText: "밴드 동아리 AEROCK",
  },
  {
    cardTitle: "줄울림",
    cardSubtitle:"20:32 - 20:57",
    cardDetailedText: "어쿠스틱 밴드 동아리 Julullim",
  },
  {
    cardTitle: "Special Guest",
    cardSubtitle:"21:00 - 22:30",
    cardDetailedText: "필 / 하하 / 헤이즈",
  },
  {
    cardTitle: "에어비트",
    cardSubtitle:"22:30 - 23:00",
    cardDetailedText: "EDM & DJing 소모임 AIRBEAT",
  }

];

const itemstwo = [{
  cardTitle: "광대와 끼",
  cardSubtitle:"18:00 - 18:20",
  cardDetailedText: "중앙풍물패 광대와 끼",
 
},
{
  cardTitle: "랩플레인",
  cardSubtitle:"18:20 - 19:10",
  cardDetailedText: "힙합 동아리 RAPLANE",
 
},
{
  cardTitle: "도스",
  cardSubtitle:"19:10 - 19:40",
  cardDetailedText: "댄스동아리 DOS",
},
{
  cardTitle: "슈퍼스타 KAU",
  cardSubtitle:"19:40 - 20:30",
  cardDetailedText: "항공대 스타 발굴 오디션",
},
{
  cardTitle: "MC 레크레이션",
  cardSubtitle:"20:30 - 21:30"
},
{
  cardTitle: "Special Guest",
  cardSubtitle:"21:30 - 22:40",
  cardDetailedText: "우디 / 다이나믹듀오 / DJ공연",
}
];




  return (
    <div className='booth-container'>
      <Header firstDayContent={<><CardSlider cards={cardsDayOne} /><Timeline items={items1}/></>} secondDayContent={<><CardSlider cards={cardsDayTwo} /><Timeline items={itemstwo}/></>} page={'공연'} />
    </div>
  );
}

export default Concert
