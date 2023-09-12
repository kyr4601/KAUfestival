import React, {useState} from 'react'
import './../assets/styles/foodtruck.css';
import groundImg from './../assets/images/ground.png';
import ShortBtn from './ShortBtn';
import Price from './Price';

const FoodTruck = () => {

  const [selectedBtn, setSelectedBtn] = useState('1');

  // 버튼 클릭 핸들러
  const handleBtnClick = (btnTitle) => {
    setSelectedBtn(btnTitle);
  };

  // 선택된 버튼에 따라 내용을 변경
  const renderContent = () => {
    switch (selectedBtn) {
      case '1':
        return (
          <>
            <h3 className='major'>스시앤스시</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='모듬초밥' price='13,000벨' />
              <Price menu='불초밥' price='12,000벨' />
            </div>
          </>
        );
      case '2':
        // 다른 버튼에 따른 내용 추가
        return (
          <>
            <h3 className='major'>크라운키친</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='흑돼지 덮밥' price='10,000벨' />
            </div>
          </>
        );
      case '3':
        return (
          <>
            <h3 className='major'>곱창앤야끼</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='야채곱창' price='10,000벨' />
              <Price menu='야끼소바' price='8,000벨' />
            </div>
          </>
        );
      case '4':
        return (
          <>
            <h3 className='major'>라온</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='스테이크 덮밥' price='10,000벨' />
            </div>
          </>
        );
      case '5':
        return (
          <>
            <h3 className='major'>서프라이즈데이</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='어묵 / 튀김' price='3,000벨' />
              <Price menu='떡볶이 / 순대' price='4,000벨' />
              <Price menu='튀김범벅' price='6,000벨' />
              <Price menu='떡순튀 / 오떡순' price='10,000벨' />
            </div>
          </>
        );
      case '6':
        return (
          <>
            <h3 className='major'>와니 닭강정</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='닭강정 컵' price='6,000벨' />
              <Price menu='닭강정 소' price='11,000벨' />
              <Price menu='닭강정 중' price='16,000벨' />
              <Price menu='닭강정 대' price='20,000벨' />
            </div>
          </>
        );
      case '7':
        return (
          <>
            <h3 className='major'>마이츄 츄러스</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='정통 츄러스' price='4,000벨' />
              <Price menu='회오리 감자' price='4,000벨' />
              <Price menu='소떡소떡' price='4,000벨' />
              <Price menu='츄러스&아이스크림' price='6,000벨' />
            </div>
          </>
        );
      case '8':
        return (
          <>
            <h3 className='major'>타코아찌</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='타코야끼(7알)' price='5,000벨' />
            </div>
          </>
        );
      case '9':
        return (
          <>
            <h3 className='major'>파파꼬치</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='닭꼬치' price='5,000벨' />
              <Price menu='염통꼬치(2P)' price='6,000벨' />
            </div>
          </>
        );
      case '10':
        return (
          <>
            <h3 className='major'>스위트박스</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='아메리카노' price='3,500벨' />
              <Price menu='라떼/바닐라라떼/초코라떼' price='4,000벨' />
              <Price menu='에이드(레몬,자몽,딸기)' price='4,000벨' />
              <Price menu='복숭아 아이스티' price='4,000벨' />
            </div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className='ground-container'>
      <p className='warning'>*트럭의 위치는 실제와 다를 수 있습니다</p>
    <div className='wrap'>
      <img src={groundImg} alt='운동장'/>
      <p className='stage'>Stage</p>
      
       <ShortBtn
          btnTitle='스시'
          style={{ top: '10px', left: '24px' }}
          isSelected={selectedBtn === '1'}  
          onClick={() => handleBtnClick('1')}
        />
        <ShortBtn
          btnTitle='덮밥'
          style={{ top: '10px', left: '84px' }}
          isSelected={selectedBtn === '2'}
          onClick={() => handleBtnClick('2')}
        />
        <ShortBtn 
          btnTitle='곱창/야끼'
          style={{ top: '10px', left: '144px' }} 
          isSelected={selectedBtn === '3'} 
          onClick={() => handleBtnClick('3')} 
        />
        <ShortBtn
          btnTitle='덮밥'
          style={{ top: '10px', left: '202px' }}
          isSelected={selectedBtn === '4'}
          onClick={() => handleBtnClick('4')}
        />
        <ShortBtn 
          btnTitle='분식'
          style={{ top: '10px', left: '260px' }} 
          isSelected={selectedBtn === '5'} 
          onClick={() => handleBtnClick('5')} 
        />
        <ShortBtn
          btnTitle='닭강정'
          style={{ top: '175px', left: '24px' }}
          isSelected={selectedBtn === '6'}  
          onClick={() => handleBtnClick('6')}
        />
        <ShortBtn
          btnTitle='츄러스'
          style={{ top: '175px', left: '84px' }}
          isSelected={selectedBtn === '7'}
          onClick={() => handleBtnClick('7')}
        />
        <ShortBtn 
          btnTitle='타코야끼'
          style={{ top: '175px', left: '144px' }} 
          isSelected={selectedBtn === '8'} 
          onClick={() => handleBtnClick('8')} 
        />
        <ShortBtn
          btnTitle='꼬치'
          style={{ top: '175px', left: '202px' }}
          isSelected={selectedBtn === '9'}
          onClick={() => handleBtnClick('9')}
        />
        <ShortBtn 
          btnTitle='카페'
          style={{ top: '175px', left: '260px' }} 
          isSelected={selectedBtn === '10'} 
          onClick={() => handleBtnClick('10')} 
        />
      </div>
      <div>{renderContent()}</div>
    </div>
  

  )
}

export default FoodTruck
