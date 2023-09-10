import React, { useState } from 'react';
import './../assets/styles/tabs.css';

const Tabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <div className="tab-header">
          {tabData.map((tab, index) => (
            <div 
              key={index} 
              className={index === activeTab ? 'active' : ''} 
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div 
          className="tab-indicator" 
          style={{ left: `calc(calc(100% / 2) * ${activeTab})` }}
        />
        <div className="tab-body">
          {tabData.map((tab, index) => (
            <div 
              key={index} 
              className={index === activeTab ? 'active' : ''}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
