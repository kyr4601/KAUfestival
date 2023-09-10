import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import Tabs from '../../components/Tabs'
import Market1 from '../../components/Market1'
import FoodTruck from '../../components/FoodTruck'
import Market2 from '../../components/Market2'
import Pub from '../../components/Pub'


const Booth = () => {

  const tabDataA = [
    {
      title: '마당사업',
      content: <Market1 />
    },
    {
      title: '푸드트럭',
      content: <FoodTruck />
    }]

    const tabDataB = [
      {
        title: '마당사업',
        content: <Market2 />
      },
      {
        title: '주점',
        content: <Pub />
      }]

    const firstDayContent = <Tabs tabData={tabDataA} />;
    const secondDayContent = <Tabs tabData={tabDataB} />;

  return (
    <div className='booth-container'>
      <Header firstDayContent={firstDayContent} secondDayContent={secondDayContent} page={'부스'}/>
    </div>
  )
}

export default Booth
