import React, {useState} from 'react'
import './../assets/styles/pub.css';
import groundImg from './../assets/images/ground.png';
import ShortBtn from './ShortBtn';
import Price from './Price';

const Pub = () => {

  const [selectedBtn, setSelectedBtn] = useState('2');

  // 버튼 클릭 핸들러
  const handleBtnClick = (btnTitle) => {
    setSelectedBtn(btnTitle);
  };

  // 선택된 버튼에 따라 내용을 변경
  const renderContent = () => {
    switch (selectedBtn) {
      case '2':
        // 다른 버튼에 따른 내용 추가
        return (
          <>
            <h3 className='major'>항공운항학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='대파제육볶음' price='12,000벨' />
              <Price menu='골뱅이 대파무침' price='9,000벨' />
              <Price menu='과일화채' price='5,000벨' />
              <Price menu='아이스티' price='1,500벨' />
              <Price menu='대파라면' price='3,500벨' />
            </div>
          </>
        );
      case '3':
        return (
          <>
            <h3 className='major'>항공교통물류학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='소세지야채볶음' price='7,500벨' />
              <Price menu='두부김치' price='7,000벨' />
              <Price menu='오돌뼈&주먹밥' price='11,000벨' />
              <Price menu='김치전' price='7,500벨' />
              <Price menu='감자전' price='7,000벨' />
            </div>
          </>
        );
      case '4':
        return (
          <>
            <h3 className='major'>항공전자정보공학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='육회' price='15,000벨' />
              <Price menu='국물떡볶이&주먹밥' price='10,900벨' />
              <Price menu='김치전' price='9,000벨' />
              <Price menu='황도' price='5,000벨' />
            </div>
          </>
        );
      case '5':
        return (
          <>
            <h3 className='major'>소프트웨어학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='닭강정' price='12,000벨' />
              <Price menu='닭꼬치' price='10,000벨' />
              <Price menu='참치마요주먹밥' price='5,500벨' />
              <Price menu='제육볶음' price='8,000벨' />
              <Price menu='수박화채' price='5,000벨' />
            </div>
          </>
        );
      case '7':
        return (
          <>
            <h3 className='major'>항공우주 및 기계공학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='라면땅' price='3,500벨' />
              <Price menu='황도' price='4,500벨' />
              <Price menu='편육' price='7,000벨' />
              <Price menu='무뼈닭발' price='13,900벨' />
              <Price menu='도토리묵국' price='5,000벨' />
            </div>
          </>
        );
      case '8':
        return (
          <>
            <h3 className='major'>신소재공학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='오돌뼈&주먹밥' price='11,000벨' />
              <Price menu='닭꼬치' price='12,000벨' />
              <Price menu='김치전' price='7,000벨' />
              <Price menu='황도' price='5,000벨' />
              <Price menu='어묵탕' price='7,000벨' />
            </div>
          </>
        );
      case '9':
        return (
          <>
            <h3 className='major'>경영학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='대패숙주볶음' price='8,000벨' />
              <Price menu='오뎅탕' price='5,000벨' />
              <Price menu='소세지구이' price='8,000벨' />
              <Price menu='나쵸' price='5,000벨' />
            </div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className='ground-container'>
      <p className='warning'></p>
    <div className='wrap'>
      <img src={groundImg} alt='운동장'/>
      <p className='stage'>Stage</p>
      
       
        <ShortBtn
          btnTitle='운항'
          style={{ top: '10px', left: '84px' }}
          isSelected={selectedBtn === '2'}
          onClick={() => handleBtnClick('2')}
        />
        <ShortBtn 
          btnTitle='교물'
          style={{ top: '10px', left: '144px' }} 
          isSelected={selectedBtn === '3'} 
          onClick={() => handleBtnClick('3')} 
        />
        <ShortBtn
          btnTitle='전정'
          style={{ top: '10px', left: '202px' }}
          isSelected={selectedBtn === '4'}
          onClick={() => handleBtnClick('4')}
        />
        <ShortBtn 
          btnTitle='소학'
          style={{ top: '10px', left: '260px' }} 
          isSelected={selectedBtn === '5'} 
          onClick={() => handleBtnClick('5')} 
        />
        
        <ShortBtn
          btnTitle='항우기'
          style={{ top: '175px', left: '84px' }}
          isSelected={selectedBtn === '7'}
          onClick={() => handleBtnClick('7')}
        />
        <ShortBtn 
          btnTitle='신소재'
          style={{ top: '175px', left: '144px' }} 
          isSelected={selectedBtn === '8'} 
          onClick={() => handleBtnClick('8')} 
        />
        <ShortBtn
          btnTitle='경영'
          style={{ top: '175px', left: '202px' }}
          isSelected={selectedBtn === '9'}
          onClick={() => handleBtnClick('9')}
        />
        
      </div>
      <div>{renderContent()}</div>
    </div>
  

  )
}

export default Pub
