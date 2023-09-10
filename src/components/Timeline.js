import React from 'react'
import { Chrono } from "react-chrono";
import './../assets/styles/timeline.css'

const Timeline = ({items}) => {

  return (
    <div className='time-content' style={{ width: '330px', height: '300px', marginBottom: '30px', marginRight:'20px'}}>
        <h3>TimeTable</h3>
        <Chrono 
        key={Math.random()} 
        items={items}
        mode="VERTICAL" 
        cardHeight={100}
        hideControls
        scrollable={{ scrollbar: true }}
        lineWidth={1.5}
        theme={{
            primary: '#59BCA8',
            secondary: '#fff',
            cardBgColor: '#fff',
            titleColor: 'black',
            cardTitleColor: '#59BCA8',
            
        }}
        fontSizes={{
            cardSubtitle: '10px',
            cardTitle: '1.4rem'
        }}
        />
    </div>
  )
}

export default Timeline
