import React, { useState } from 'react';
import './../assets/styles/market1.css';
import blockImg from './../assets/images/block.png';
import ShortBtn from './ShortBtn';
import Price from './Price';

const Market1 = () =>  {
  // 초기 상태 설정
  const [selectedBtn, setSelectedBtn] = useState('교물');

  // 버튼 클릭 핸들러
  const handleBtnClick = (btnTitle) => {
    setSelectedBtn(btnTitle);
  };

  // 선택된 버튼에 따라 내용을 변경
  const renderContent = () => {
    switch (selectedBtn) {
      case '교물':
        return (
          <>
            <h3 className='major'>항공교통물류학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='아이스크림호떡' price='3,000' />
              <Price menu='아이스티' price='12,000' />
            </div>
          </>
        );
      case '항우기':
        // 다른 버튼에 따른 내용 추가
        return (
          <>
            <h3 className='major'>항공우주 및 기계공학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='타투스티커' price='3,000' />
              <Price menu='발펀치' price='12,000' />
            </div>
          </>
        );
      case '자전':
        return (
          <>
            <h3 className='major'>자유전공학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='야구공 구속 측정' price='3,000' />
            </div>
          </>
        );
      case '스드공':
        return (
          <>
            <h3 className='major'>스마트드론공학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='드론 아케이드' price='3,000' />
            </div>
          </>
        );
      case '공학':
        return (
          <>
            <h3 className='major'>공학계열</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='무알콜 칵테일' price='3,000' />
            </div>
          </>
        );
      case '총학':
        return (
          <>
            <h3 className='major'>총학생회</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='항대존 팔찌' price='무 료' />
              <Price menu='포토부스' price='2,000벨' />
            </div>
          </>
        );
      case '나래':
        return (
          <>
            <h3 className='major'>나래</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='나래를 이겨라!' price='3,000' />
            </div>
          </>
        );
      case 'AI자율':
        return (
          <>
            <h3 className='major'>AI자율주행시스템공학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='슬러쉬' price='3,000' />
            </div>
          </>
        );
      case '소학':
        return (
          <>
            <h3 className='major'>소프트웨어학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='불고기피자' price='3,000' />
              <Price menu='폴라로이드' price='3,000' />
              <Price menu='뚜껑 날리기' price='3,000' />
              <Price menu='사다리 소개팅' price='3,000' />
            </div>
          </>
        );
      case '경영':
        return (
          <>
            <h3 className='major'>경영학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='포춘쿠키' price='3,000' />
              <Price menu='항대 시그널' price='3,000' />
              <Price menu='닭꼬치' price='3,000' />
              <Price menu='소떡소떡' price='3,000' />
            </div>
          </>
        );
      case '전정':
        return (
          <>
            <h3 className='major'>항공전자정보공학부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='랜덤 공 리프팅' price='3,000' />
              <Price menu='에이드' price='3,000' />
            </div>
          </>
        );
      case '운항':
        return (
          <>
            <h3 className='major'>항공운항학과</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='카지노' price='3,000' />
              <Price menu='통아저씨' price='3,000' />
            </div>
          </>
        );
      default:
        return null;
    }
  }
  

  return (
    <div className='market-container'>
      <div className='wrap'>
        <img src={blockImg} alt='Block'></img>
        <p className='building'>학생회관</p>
        <ShortBtn
          btnTitle='교물'
          style={{ top: '40px', left: '70px' }}
          isSelected={selectedBtn === '교물'} // isSelected를 추가하여 현재 버튼이 선택된 경우만 색상이 빨간색이 됩니다.
          onClick={() => handleBtnClick('교물')}
        />
        <ShortBtn
          btnTitle='항우기'
          style={{ top: '40px', left: '130px' }}
          isSelected={selectedBtn === '항우기'}
          onClick={() => handleBtnClick('항우기')}
        />
        <ShortBtn btnTitle='자전' 
        style={{ top: '40px', left: '190px' }} 
        isSelected={selectedBtn === '자전'} 
        onClick={() => handleBtnClick('자전')} 
        />
        <ShortBtn btnTitle='스드공' 
        style={{ top: '40px', left: '250px' }} 
        isSelected={selectedBtn === '스드공'} 
        onClick={() => handleBtnClick('스드공')} 
        />
        <ShortBtn btnTitle={<>
          스<br />
          드<br />
          공
        </>}
        style={{ top: '100px', left: '280px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === '스드공'} 
        onClick={() => handleBtnClick('스드공')}
        />
        <ShortBtn btnTitle={<>
          공<br />
          학
        </>}
        style={{ top: '160px', left: '280px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === '공학'} 
        onClick={() => handleBtnClick('공학')}
        />
        <ShortBtn btnTitle={<>
          총<br />
          학
        </>}
        style={{ top: '50px', left: '6px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === '총학'} 
        onClick={() => handleBtnClick('총학')}
        />
        <ShortBtn btnTitle={<>
          나<br />
          래
        </>}
        style={{ top: '110px', left: '6px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === '나래'} 
        onClick={() => handleBtnClick('나래')}
        />
        <ShortBtn btnTitle={<>
          AI<br />
          자율
        </>}
        style={{ top: '170px', left: '6px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === 'AI자율'} 
        onClick={() => handleBtnClick('AI자율')}
        />
        <ShortBtn btnTitle='소학' 
        style={{ top: '215px', left: '16px' }} 
        isSelected={selectedBtn === '소학'} 
        onClick={() => handleBtnClick('소학')} 
        />
        <ShortBtn btnTitle='경영' 
        style={{ top: '215px', left: '79px' }} 
        isSelected={selectedBtn === '경영'} 
        onClick={() => handleBtnClick('경영')} 
        />
        <ShortBtn btnTitle='전정' 
        style={{ top: '215px', left: '142px' }} 
        isSelected={selectedBtn === '전정'} 
        onClick={() => handleBtnClick('전정')} 
        />
        <p className='grey-btn'>새내기<br />성공센터</p>
        <ShortBtn btnTitle='운항' 
        style={{ top: '215px', left: '270px' }} 
        isSelected={selectedBtn === '운항'} 
        onClick={() => handleBtnClick('운항')} 
        />
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default Market1;
