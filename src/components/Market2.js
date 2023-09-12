import React, { useState } from 'react';
import './../assets/styles/market2.css';
import blockImg from './../assets/images/block2.png';
import ShortBtn from './ShortBtn';
import Price from './Price';

const Market2 = () =>  {
  // 초기 상태 설정
  const [selectedBtn, setSelectedBtn] = useState('학복');

  // 버튼 클릭 핸들러
  const handleBtnClick = (btnTitle) => {
    setSelectedBtn(btnTitle);
  };

  // 선택된 버튼에 따라 내용을 변경
  const renderContent = () => {
    switch (selectedBtn) {
      case '학복':
        return (
          <>
            <h3 className='major'>학생복지회</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='솜사탕 아이스크림' price='4,000벨' />
              <Price menu='크룽지 아이스크림' price='3,500벨' />
            </div>
          </>
        );
      case '아카로아':
        return (
          <>
            <h3 className='major'>아카로아</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='핫도그' price='3,500벨' />
              <Price menu='에이드' price='1,500벨' />
            </div>
          </>
        );
      case '픽쳐':
        return (
          <>
            <h3 className='major'>픽쳐</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='폴라로이드' price='2,000벨' />
              <Price menu='엽서' price='2,000벨' />
            </div>
          </>
        );
      case '이웃사촌부':
        return (
          <>
            <h3 className='major'>이웃사촌부</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='크레이프' price='4,900벨' />
              <Price menu='메론소다' price='2,900벨' />
            </div>
          </>
        );
      case '라퓨타':
        return (
          <>
            <h3 className='major'>라퓨타</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='열기구 탑승권' price='7,000벨' />
            </div>
          </>
        );
      case '에어윙즈':
        return (
          <>
            <h3 className='major'>에어윙즈</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='축구공 볼링' price='미 정' />
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
      case '방송국':
        return (
          <>
            <h3 className='major'>방송국</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='신청곡' price='무 료' />
              <Price menu='오락실' price='추후공개' />
            </div>
          </>
        );
      case '푸드트럭':
        return (
          <>
            <h3 className='major'>푸드트럭</h3>
            <p className='warning'>*해당 정보는 변동될 수 있습니다</p>
            <div className='menu-container'>
              <Price menu='닭강정 소/중/대' price='추후공개' />
              <Price menu='닭꼬치/염통꼬치' price='추후공개' />
              <Price menu='타코야끼/회오리감자' price='추후공개' />
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
          btnTitle='학복'
          style={{ top: '40px', left: '70px' }}
          isSelected={selectedBtn === '학복'} // isSelected를 추가하여 현재 버튼이 선택된 경우만 색상이 빨간색이 됩니다.
          onClick={() => handleBtnClick('학복')}
        />
        <ShortBtn
          btnTitle='아카로아'
          style={{ top: '40px', left: '125px' }}
          isSelected={selectedBtn === '아카로아'}
          onClick={() => handleBtnClick('아카로아')}
        />
        <ShortBtn btnTitle='이웃사촌부' 
        style={{ top: '40px', left: '180px', fontSize: '11px' }} 
        isSelected={selectedBtn === '이웃사촌부'} 
        onClick={() => handleBtnClick('이웃사촌부')} 
        />
        <ShortBtn btnTitle='픽쳐' 
        style={{ top: '40px', left: '235px' }} 
        isSelected={selectedBtn === '픽쳐'} 
        onClick={() => handleBtnClick('픽쳐')} 
        />
        <ShortBtn btnTitle={<>
          인권<br />
          센터
        </>}
        style={{ top: '70px', left: '280px', transform: 'rotate(90deg)', backgroundColor: '#D9D9D9' }} 
        isSelected={selectedBtn === 'false'} 
        onClick={() => handleBtnClick('')}
        />
        <ShortBtn btnTitle={<>
          시원<br />
          스쿨
        </>}
        style={{ top: '125px', left: '280px', transform: 'rotate(90deg)',backgroundColor: '#D9D9D9'  }} 
        isSelected={selectedBtn === 'false'} 
        onClick={() => handleBtnClick('')}
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
          방<br />
          송<br />
          국
        </>}
        style={{ top: '105px', left: '6px', transform: 'rotate(90deg)' }} 
        isSelected={selectedBtn === '방송국'} 
        onClick={() => handleBtnClick('방송국')}
        />
        <ShortBtn btnTitle={<>
          드론<br />
          연구회
        </>}
        style={{ top: '161px', left: '6px', transform: 'rotate(90deg)' , fontSize: '11px',backgroundColor: '#D9D9D9'}} 
        isSelected={selectedBtn === 'false'} 
        onClick={() => handleBtnClick('')}
        />
        <ShortBtn btnTitle='에어윙즈' 
        style={{ top: '220px', left: '79px' }} 
        isSelected={selectedBtn === '에어윙즈'} 
        onClick={() => handleBtnClick('에어윙즈')} 
        />
        <ShortBtn btnTitle='푸드트럭' 
        style={{ top: '170px', left: '79px' ,width: '110px' }} 
        isSelected={selectedBtn === '푸드트럭'} 
        onClick={() => handleBtnClick('푸드트럭')} 
        />
        <p className='grey-btn2'>몬스터<br />에너지</p>
        <ShortBtn btnTitle='라퓨타' 
        style={{ top: '170px', left: '270px' }} 
        isSelected={selectedBtn === '라퓨타'} 
        onClick={() => handleBtnClick('라퓨타')} 
        />
        <ShortBtn btnTitle='밝은눈안과'
        style={{ top: '170px', left: '205px', backgroundColor: '#D9D9D9', fontSize: '11px'}} 
        isSelected={selectedBtn === 'false'} 
        onClick={() => handleBtnClick('')} 
        />
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default Market2;
